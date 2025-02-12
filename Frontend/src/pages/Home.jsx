import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-[url(https://images.all-free-download.com/images/graphiclarge/urban_street_backdrop_cars_traffic_light_sketch_6924425.jpg)] h-screen w-full flex flex-col justify-between">
      <img
        className=" w-20 ml-8 mt-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="bg-white h-[20%] p-3 flex flex-col gap-4">
        <p className="text-2xl font-bold">Get started with Uber</p>
        <Link
          to={"/login"}
          className="bg-black h-[50px] w-[99%] text-white text-[19px] rounded-md flex justify-center items-center gap-[50%] pl-[38%]"
        >
          Continue <box-icon name="right-arrow-alt" color="#fffefe"></box-icon>
        </Link>
      </div>
    </div>
  );
};

export default Home;
