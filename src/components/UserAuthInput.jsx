import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
  setgetEmailValidationStatus
}) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleTextChange = (e) => {
    setValue(e.target.value);
    setStateFunction(e.target.value);
    if (placeHolder === "Email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const status = emailRegex.test(value);
      setIsEmailValid(status);
      setgetEmailValidationStatus(status);
    }
  };
  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{label}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${
          !isEmailValid && placeHolder === "Email" && value.length > 0
            ? "border-2 border-red-500"
            : ""
        }`}
      >
        <Icon className="text-text555 text-2xl" />
        <input
          type={isPass && showPass ? "password" : "text"}
          placeholder={placeHolder}
          className="w-full flex-1 outline-none bg-transparent text-text555 text-lg  "
          value={value}
          onChange={handleTextChange}
        />
        <motion.div
          onClick={() => setShowPass(!showPass)}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer "
        >
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
