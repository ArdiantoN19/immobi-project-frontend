import React from "react";
import Button from "../components/ui/Button";

const NewKaryawan: React.FC = () => {
  return (
    <form className="max-w-lg">
      <div className="mb-3">
        <label htmlFor="name" className="block mb-1 text-slate-900">
          Name
        </label>
        <input
          type="text"
          className="rounded border px-4 py-2.5 w-full border-slate-500"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="block mb-1 text-slate-900">
          Age
        </label>
        <input
          name="age"
          type="number"
          className="rounded border px-4 py-2.5 w-full border-slate-500"
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
          checked
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
        />
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
          className="rounded border px-4 py-2.5 w-full border-slate-500"
        ></textarea>
      </div>
      <div className="float-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default NewKaryawan;
