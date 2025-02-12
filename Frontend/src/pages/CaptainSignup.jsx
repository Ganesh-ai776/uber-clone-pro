import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [captainData, setCaptainData] = useState({});

  const captainSubmitLogin = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password, number: number });
    setName("");
    setEmail("");
    setPassword("");
    setNumber("");
    console.log(captainData);
  };
  return (
    <div className=" h-screen w-full flex flex-col p-5">
      <img
        className=" w-25 ml-[35%] mb-3"
        src="https://pngimg.com/d/uber_PNG24.png"
        alt=""
      />
      <form onSubmit={(e) => captainSubmitLogin(e)}>
        <h1 className="text-lg font-semibold mb-1">What's your fullname ?</h1>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 placeholder:text-base h-10 w-full rounded-md p-3 mb-3"
          type="text"
          placeholder="Fullname"
        />
        <h1 className="text-lg font-semibold mb-1">What's your email ?</h1>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-200 placeholder:text-base h-10 w-full rounded-md p-3"
          type="email"
          placeholder="Enter your email.."
        />
        <h1 className="text-lg font-semibold mt-6 mb-1">Enter Password </h1>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200 placeholder:text-base h-10 w-full rounded-md p-3"
          type="password"
          placeholder="Password"
        />
        <h1 className="text-lg font-semibold mt-6 mb-1">Enter Phone Number </h1>
        <input
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="bg-gray-200 placeholder:text-base h-10 w-full rounded-md p-3"
          type="number"
          placeholder="phone number"
        />
        <button
          type="submit"
          className="bg-black h-[40px] w-full rounded-sm text-white text-lg mt-3 mb-2"
        >
          Sign up
        </button>
      </form>
      <p>
        Already have an account?
        <Link to={"/captain-login"} className="font-mono text-blue-500">
          Login here
        </Link>
      </p>
      <p className="text-[10px] mt-15">
        By proceeding, you consent to get calls, WhatsApp or SMS massages,
        including by autometed means.
      </p>
    </div>
  );
};

export default CaptainSignup;
