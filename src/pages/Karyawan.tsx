import React, { useState } from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Karyawan: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [karyawans, setKaryawans] = React.useState([]);
  const [message, setMessage] = useState<string>("");

  React.useEffect(() => {
    (async () => {
      const data = await api.getKaryawan();
      setKaryawans(data);
      setIsLoading(false);
    })();
  }, []);

  const onDeleteHandler = async (id: number) => {
    const copyData = [...karyawans];
    const index = copyData.findIndex((karyawan) => karyawan["id"] === id);

    const result = await api.deleteKaryawan(id);
    if (result.status === "success") {
      setMessage("Success delete karyawan");
      if (index !== -1) {
        copyData.splice(index, 1);
        setKaryawans(copyData);
      }
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="mb-1 text-3xl font-bold text-slate-900">Karyawan</h2>
          <p className="text-xs text-slate-500">You can see list of karyawan</p>
        </div>
        <Button onClick={() => navigate("/karyawan/new")}>Create</Button>
      </div>
      <p className="mb-5 text-red-500">{message}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border rounded">
          <thead>
            <tr className="border-b rounded-tr">
              <th className="py-2 border-r">No</th>
              <th className="py-2 border-r">Name</th>
              <th className="py-2 border-r">ID Jabatan</th>
              <th className="py-2 border-r">Age</th>
              <th className="py-2 border-r">Gender</th>
              <th className="py-2 border-r">Tanggal Lahir</th>
              <th className="py-2 border-r">Alamat</th>
              <th className="py-2 border-r">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {!karyawans.length ? (
              <tr>
                <td className="py-2 border-r" colSpan={8}>
                  NO DATA
                </td>
              </tr>
            ) : (
              karyawans.map((karyawan, index) => (
                <tr key={karyawan["id"]} className="border-b">
                  <td className="py-2 border-r">{(index += 1)}</td>
                  <td className="py-2 border-r">{karyawan["name"]}</td>
                  <td className="py-2 border-r">{karyawan["id_jabatan"]}</td>
                  <td className="py-2 border-r">{karyawan["age"]}</td>
                  <td className="py-2 border-r">{karyawan["gender"]}</td>
                  <td className="py-2 border-r">{karyawan["tanggal_lahir"]}</td>
                  <td className="py-2 border-r">{karyawan["alamat"]}</td>
                  <td className="py-2 border-r">
                    <div className="flex items-center justify-center gap-2">
                      <Button>Edit</Button>
                      <Button onClick={() => onDeleteHandler(karyawan["id"])}>
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Karyawan;
