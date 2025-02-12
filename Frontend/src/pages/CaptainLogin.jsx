import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const captainSubmitLogin = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
    console.log(captainData);
  };
  return (
    <div className=" h-screen w-full flex flex-col p-5">
      <img
        className=" w-30 ml-[30%] mb-10"
        src="https://pngimg.com/d/uber_PNG24.png"
        alt=""
      />
      <h1 className="text-xl font-semibold mb-2">What's your email ?</h1>
      <form onSubmit={(e) => captainSubmitLogin(e)}>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-200 h-12 w-full rounded-md p-3 "
          type="email"
          placeholder="Enter your email.."
        />
        <h1 className="text-xl font-semibold mt-8 mb-2">Enter Password </h1>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200 h-12 w-full rounded-md p-3 "
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-black h-[40px] w-full rounded-sm text-white text-lg mt-3 mb-2"
        >
          Login
        </button>
      </form>
      <p>
        New Captain here?
        <Link to={"/captain-signup"} className="font-mono text-blue-500">
          Create new Account
        </Link>
      </p>
      <Link
        to={"/login"}
        className="bg-green-700  h-[40px] w-full rounded-sm text-white text-lg mt-[40%] flex justify-center items-center"
      >
        Login as a User
      </Link>
      
    </div>
  );
};

export default CaptainLogin;
