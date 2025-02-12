import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const userSubmitLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setUserData({ email: email, password: password });
    console.log(userData);
  };
  return (
    <div className=" h-screen w-full flex flex-col p-5">
      <img
        className=" w-20 ml-[35%] mt-4 mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <h1 className="text-xl font-semibold mb-2">What's your email ?</h1>
      <form onSubmit={(e) => userSubmitLogin(e)}>
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
        New here?
        <Link to={"/signup"} className="font-mono text-blue-500">
          Create new Account
        </Link>
      </p>
      <Link to={"/captain-login"} className="bg-yellow-600  h-[40px] w-full rounded-sm text-white text-lg mt-[60%] flex justify-center items-center">
        Login as a Captain
      </Link>
    </div>
  );
};

export default UserLogin;
