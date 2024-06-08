import React, { useState } from "react";
import { Logo } from "../assets";
import { UserAuthInput } from "../components";
import { FaEnvelope } from "react-icons/fa";
import { MdPassword } from "react-icons/md";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full py-6 ">
      <img
        src={Logo}
        alt="logo"
        className="object-contain w-32 opacity-50 h-auto"
      />

      <div className="w-full flex flex-col items-center justify-center py-8  ">
        <p className="py-6 text-4xl text-primaryText">
          {" "}
          Join With PixelCode ❤️
        </p>
        <p className="py-6 text-2xl text-primaryText ">
          Register to start building your projects today. 😍
        </p>

        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8 ">
          {/* email */}
          <UserAuthInput
            label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
          />
          {/* password */}
          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword}
          />
          {/* alert section  */}

          {/* login button */}

          {/* text section  */}

          {/* or section */}

          {/* google signin section  */}

          {/* or section  */}

          {/* github signin section  */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;