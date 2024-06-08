import React, { useState } from "react";
import { FaEnvelope, FaEye } from "react-icons/fa";

const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
}) => {
  const [value, setvalue] = useState("");
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div className="flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200">
        <Icon className="text-text555 text-2xl" />
        <input
          type={isPass ? "password" : "text"}
          placeholder={placeHolder}
          className="w-full flex-1 outline-none bg-transparent text-text555 text-lg  "
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <div className="cursor-pointer ">
          <FaEye className="text-text555 text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default UserAuthInput;
