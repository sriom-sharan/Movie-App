import { useEffect, useState } from "react";
import { useFirebase } from "../../context/Firebase";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Authentication = () => {
  const Firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user?.uid;
        console.log(uid + "Loggedin");
        navigate("/");
        return true;
      } else {
        console.log("Signed Out");
        return false;
      }
    });
  });

  return (
    <div
      className="w-full h-screen flex flex-col  gap-4"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        filter: blur("10px"),
        backdropFilter: blur("10px"),

        background:
          " url(https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQCPoAc9iHDFmnjsbSkiV_Pm--vhPCzU2nNtZvxp17xz2aVOCG4XlrWaX6t3jEKMMMwENzqbdI-h0GjVYwtg5H2GlNp9w4pVw6JMOBUBFtJ-tf9_e3nOGxyOJCQSymsrqgrNTLB1lth9RThvNUwUYydjP1Y.jpg?r=ed9)",
      }}
    >
      <div className="absolute top-0 left-0  blur-md bg-zinc-950/60 z-10 w-screen h-screen "></div>
      <Link
        onClick={() => navigate(-1)}
        className="text-zinc-200 z-[100000] ml-2 hover:text-primary"
      >
        <i className="ri-arrow-left-s-line  text-4xl font-thin bg-purple-900 rounded-full "></i>
      </Link>

      {/* Login Layout */}
      <div className=" flex flex-col z-40 p-4 rounded-lg bg-gray-700/90 m-auto mt-10">
        <h1 className="text-white text-4xl pb-3 font-poppins text-center pt-2 ">
          Sign UP
        </h1>
        <hr className="mb-8 h-[1px] bg-gray-200 border-0 dark:bg-gray-500" />
        <label className="text-zinc-300 flex">
          Email<p className="text-red-600 ml-auto text-xs">{emailError}</p>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-900 text-zinc-200 mb-3 text-sm rounded-sm w-80 mx-auto p-2"
          placeholder="Enter email here.."
          required
        />

        <label className="text-zinc-300 flex">
          Password{" "}
          <p className="text-red-600 ml-auto text-xs">{passwordError}</p>
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-zinc-900 text-zinc-200 rounded-sm mb-4 border-none outline-none text-sm  w-80 mx-auto p-2"
          placeholder="Enter password here.."
          required
        />
        <button
          onClick={() => {
            if (password.length >= 8 && emailPattern.test(email)) {
              setPasswordError("");
              setEmailError("");
              Firebase.signupUserWithEmailAndPassword(email, password);
            } else if (password.length < 8 && !emailPattern.test(email)) {
              setPasswordError("⚠ Use 8 characters minimum");
              setEmailError("⚠ Invalid email address");
            } else if (password.length < 8) {
              setEmailError("⚠ Invalid email address");
            } else {
              setEmailError("⚠ Invalid email address");
            }
          }}
          className="bg-purple-700 mt-4 border-none mb-2 outline-none text-white w-80 mx-auto  px-2 p-1"
        >
          Submit
        </button>
        <p className="text-zinc-400 flex justify-center text-center mb-2 w-full">
          or
        </p>
        <button
          onClick={signInWithGoogle}
          className="bg-white flex gap-2 py-2 mb-4 rounded-md items-center justify-center border-none outline-none text-zinc-800 w-80 mx-auto  px-2 p-1"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Authentication;
