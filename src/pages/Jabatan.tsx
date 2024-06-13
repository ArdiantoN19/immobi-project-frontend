import React, { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import api from "../utils/api";
import useInputs from "../hooks/useInputs";

const Jabatan: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [idDepartment, setIdDepartment] = useState<number>(1);
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [formData, onChangeFormData] = useInputs({
    nama_jabatan: "",
  });

  useEffect(() => {
    (async () => {
      const data = await api.getDepartments();
      setDepartments(data);
      setIsLoading(false);
      if (data.length) {
        setIdDepartment(data[0].id);
      }
    })();
  }, []);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...formData,
      id_department: idDepartment,
    };
    if (!formData.nama_jabatan) {
      setMessage("Nama harus diisi");
      return;
    }
    const response = await api.createJabatan(payload);
    if (response.status === "success") {
      setMessage("Success add department");
    } else {
      setMessage(response.message);
    }

    formData.nama_jabatan = "";
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="mb-1 text-3xl font-bold text-slate-900">Jabatan</h2>
          <p className="text-xs text-slate-500">You can add jabatan</p>
        </div>
      </div>
      <form className="max-w-lg" onSubmit={onSubmitHandler}>
        <p className="mb-5 text-red-500">{message}</p>
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
          <label htmlFor="nama_jabatan" className="block mb-1 text-slate-900">
            Nama Jabatan
          </label>
          <input
            type="text"
            className="rounded border px-4 py-2.5 w-full border-slate-500"
            name="nama_jabatan"
            id="nama_jabatan"
            value={formData.nama_jabatan}
            onChange={onChangeFormData}
          />
        </div>

        <div className="float-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Jabatan;
