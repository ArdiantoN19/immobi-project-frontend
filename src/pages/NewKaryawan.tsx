import React, { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import api from "../utils/api";
import useInputs from "../hooks/useInputs";
import { useNavigate } from "react-router-dom";

const NewKaryawan: React.FC = () => {
  const navigate = useNavigate();
  const [jabatans, setJabatans] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [filteredJabatans, setFilteredJabatans] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formData, OnChangeFormData] = useInputs({
    name: "",
    age: 0,
    tanggal_lahir: new Date(),
    alamat: "",
  });
  const [gender, setGender] = useState<string>("L");
  const [idDepartment, setIdDepartment] = useState<number>(1);
  const [idJabatan, setIdJabatan] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const data = await api.getDepartments();
      setDepartments(data);
      const data2 = await api.getJabatans();
      setJabatans(data2);
      if (data.length) {
        setIdDepartment(data[0].id);
        setFilteredJabatans(
          data2.filter(
            (jabatan: any) => jabatan["id_department"] === data[0].id
          )
        );
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (idDepartment) {
      let copyData = [...jabatans];
      copyData = copyData.filter(
        (jabatan) => jabatan["id_department"] === idDepartment
      );
      setFilteredJabatans(copyData);
      if (copyData.length) {
        setIdJabatan(copyData[0]["id"]);
      }
    }
  }, [idDepartment]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...formData,
      gender,
      id_jabatan: idJabatan,
    };

    const response = await api.createKaryawan(payload);
    if (response.status === "success") {
      navigate("/karyawan");
    } else {
      setMessage(response.message);
    }
  };

  return (
    <form className="max-w-lg pb-20" onSubmit={onSubmitHandler}>
      <h1 className="mb-5 text-3xl font-bold text-slate-900">
        Create Karyawan
      </h1>
      <p className="mb-5 text-red-500">{message}</p>
      <div className="mb-3">
        <label htmlFor="name" className="block mb-1 text-slate-900">
          Name
        </label>
        <input
          type="text"
          className="rounded border px-4 py-2.5 w-full border-slate-500"
          name="name"
          id="name"
          value={formData.name}
          onChange={OnChangeFormData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="block mb-1 text-slate-900">
          Age
        </label>
        <input
          name="age"
          type="number"
          id="age"
          className="rounded border px-4 py-2.5 w-full border-slate-500"
          value={formData.age}
          onChange={OnChangeFormData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="block mb-1 text-slate-900">
          Gender
        </label>
        <input
          type="radio"
          name="gender"
          value="L"
          className="rounded border px-4 py-2.5 border-slate-500"
          id="laki"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "L"}
        />
        <label htmlFor="laki" className="mb-1 text-slate-900">
          Laki-laki
        </label>
        <input
          type="radio"
          name="gender"
          value="P"
          className="rounded border px-4 py-2.5 border-slate-500"
          id="perempuan"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "P"}
        />
        <label htmlFor="perempuan" className="mb-1 text-slate-900">
          Perempuan
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="tanggal_lahir" className="block mb-1 text-slate-900">
          Tanggal lahir
        </label>
        <input
          name="tanggal_lahir"
          type="date"
          className="rounded border px-4 py-2.5 w-full border-slate-500"
          id="tanggal_lahir"
          value={formData.tanggal_lahir}
          onChange={OnChangeFormData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="departments" className="block mb-1 text-slate-900">
          Departmets
        </label>
        <select
          className="rounded border px-4 py-2.5 w-full border-slate-500"
          value={idDepartment}
          onChange={(e) => setIdDepartment(Number(e.target.value))}
        >
          {isLoading ? (
            <option>Loading...</option>
          ) : !departments.length ? (
            <option>Data not found...</option>
          ) : (
            departments.map((data) => (
              <option key={data["id"]} value={data["id"]}>
                {data["nama_department"]}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="jabatans" className="block mb-1 text-slate-900">
          Jabatan
        </label>
        <select
          className="rounded border px-4 py-2.5 w-full border-slate-500"
          value={idJabatan}
          onChange={(e) => setIdJabatan(Number(e.target.value))}
        >
          {isLoading ? (
            <option>Loading...</option>
          ) : !filteredJabatans.length ? (
            <option>Data not found...</option>
          ) : (
            filteredJabatans.map((data) => (
              <option key={data["id"]} value={data["id"]}>
                {data["nama_jabatan"]}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="alamat" className="block mb-1 text-slate-900">
          Alamat
        </label>
        <textarea
          name="alamat"
          id="alamat"
          cols={30}
          rows={10}
          onChange={OnChangeFormData}
          className="rounded border px-4 py-2.5 w-full border-slate-500"
          value={formData.alamat}
        ></textarea>
      </div>

      <div className="float-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default NewKaryawan;
