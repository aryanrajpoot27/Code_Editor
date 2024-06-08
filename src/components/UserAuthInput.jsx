import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
}) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(true);
  const handleTextChange = (e) => {
    setValue(e.target.value);
    setStateFunction(e.target.value);
  };
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div className="flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200">
        <Icon className="text-text555 text-2xl" />
        <input
          type={isPass && showPass ? "password" : "text"}
          placeholder={placeHolder}
          className="w-full flex-1 outline-none bg-transparent text-text555 text-lg  "
          value={value}
          onChange={handleTextChange}
        />
        <motion.div onClick={() => setShowPass(!showPass)} whileTap={{ scale: 0.9 }} className="cursor-pointer ">
          {showPass ? (
            <FaEye className="text-text555 text-2xl " />
          ) : (
            <FaEyeSlash className="text-text555 text-2xl " />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UserAuthInput;
