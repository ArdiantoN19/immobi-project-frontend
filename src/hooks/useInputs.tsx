import React, { useState } from "react";

const useInputs = (defaultValue: any) => {
  const [inputs, setInputs] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return [inputs, onChange];
};

export default useInputs;
