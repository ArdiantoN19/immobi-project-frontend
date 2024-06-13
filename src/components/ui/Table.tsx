import React from "react";
import Button from "./Button";

const Table: React.FC<{ data: never[] }> = ({ data }) => {
  const headers = Object.keys(data[0]);

  return (
    <table className="w-full border rounded">
      <thead>
        <tr className="border-b rounded-tr">
          <th className="py-2 border-r">No</th>
          {headers.map((header) => (
            <th className="py-2 border-r">{header}</th>
          ))}
          <th className="py-2 border-r">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {data.map((item, index) => (
          <tr>
            <td className="py-2 border-r">{index++}</td>
            <td className="py-2 border-r">{item[headers[index]]}</td>
            <td className="py-2 border-r">
              <div className="flex items-center justify-center gap-2">
                <Button>Edit {item}</Button>
                <Button>Hapus</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
