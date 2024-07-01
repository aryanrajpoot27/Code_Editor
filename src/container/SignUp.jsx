import React, { useState } from "react";
import { Logo } from "../assets";
import { UserAuthInput } from "../components";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdPassword } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { signInWithGithub, signInWithGoogle } from "../utils/Helpers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { fadeInOut } from "../animations";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] =
    useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState("")

  const createNewUser = async () => {
    if (getEmailValidationStatus) {
      // create new user
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log(userCred);
          }
        })
        .catch((err) => console.log(err));
    } else {
      // alert the user
    }
  };

  const loginWithEmailAndPassword = async () => {
    // login with email and password
    if (getEmailValidationStatus) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log(userCred);
          }
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message.includes("user-not-found")){
            setAlert(true)
            setAlertMsg("User Not Found")
          } 
          else if (err.message.includes("wrong-password")){
             setAlert(true)
            setAlertMsg("Wrong Password");
          } else {
            setAlert(true)
            setAlertMsg("Too much Login Attempts, Try Again Later 😕")
          }
          setInterval(() => {
            setAlert(false);
          }, 4000)
        })
    }
  };

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
            setgetEmailValidationStatus={setGetEmailValidationStatus}
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

          <AnimatePresence>
            {alert && (
          <motion.p 
            {...fadeInOut}
            className="text-red-500 "
          >
            {alertMsg}
          </motion.p>)}
          </AnimatePresence>

          {/* login button */}
          {!isLogin ? (
            <motion.div
              onClick={createNewUser}
              whileTap={{ scale: 0.9 }}
              className="bg-customGreen px-6 py-2 rounded-md w-full flex items-center justify-center text-lg text-black cursor-pointer hover:bg-cusGreen"
            >
              <p className="text-xl text-black">Sign Up</p>
            </motion.div>
          ) : (
            <motion.div
              onClick={loginWithEmailAndPassword}
              whileTap={{ scale: 0.9 }}
              className="bg-customGreen px-6 py-2 rounded-md text-lg text-black cursor-pointer w-full flex items-center justify-center hover:bg-cusGreen"
            >
              <p className="text-xl text-black">Login</p>
            </motion.div>
          )}

          {/* account text section  */}

          {!isLogin ? (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3 ">
              Already Have an account!{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-customGreen cursor-pointer "
              >
                Login Here
              </span>{" "}
            </p>
          ) : (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3 ">
              Doesn't Have an account!{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-customGreen cursor-pointer "
              >
                Create Here
              </span>{" "}
            </p>
          )}

          {/* or section */}
          <div className="flex items-center justify-center gap-12 ">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24 "></div>
            <p className="text-sm text-[rgba(256,256,256,0.2)] ">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24 "></div>
          </div>

          {/*  signIn with google section  */}
          <motion.div
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer  "
            whileTap={{ scale: 0.9 }}
          >
            <FcGoogle className="text-3xl" />
            <p className="text-xl text-white ">Sign in with Google</p>
          </motion.div>

          {/* or section  */}
          <div className="flex items-center justify-center gap-12 ">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24 "></div>
            <p className="text-sm text-[rgba(256,256,256,0.2)] ">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24 "></div>
          </div>

          {/* github signin section  */}
          <motion.div
            onClick={signInWithGithub}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer  "
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-3xl text-white" />
            <p className="text-xl text-white ">Sign in with Github</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
