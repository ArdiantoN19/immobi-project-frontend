import React, { useState } from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import useInputs from "../hooks/useInputs";

const Department: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const [formData, onChangeFormData] = useInputs({
    nama_department: "",
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };
    if (!formData.nama_department) {
      setMessage("Nama harus diisi");
      return;
    }
    const response = await api.createDepartment(payload);
    if (response.status === "success") {
      navigate("/department");
      setMessage("Success add department");
    } else {
      setMessage(response.message);
    }

    formData.nama_department = "";
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="mb-1 text-3xl font-bold text-slate-900">Department</h2>
          <p className="text-xs text-slate-500">You can add department</p>
        </div>
      </div>
      <form className="max-w-lg" onSubmit={onSubmitHandler}>
        <p className="mb-5 text-red-500">{message}</p>
        <div className="mb-3">
          <label
            htmlFor="nama_department"
            className="block mb-1 text-slate-900"
          >
            Nama Department
          </label>
          <input
            type="text"
            className="rounded border px-4 py-2.5 w-full border-slate-500"
            name="nama_department"
            id="nama_department"
            value={formData.nama_department}
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

export default Department;
