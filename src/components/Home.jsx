import React from "react";
import Navbar from "./Navbar";
import VanLife from "../assets/vanlife.png";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <main className="bg-[url('./src/assets/vanlife.png')]"></main> */}
      <div
        className="bg-cover min-h-screen w-full  px-10 "
        style={{ backgroundImage: `url(${VanLife})` }}
      >
        <h2
          className=" text-5xl text-white font-bold pt-40
         text-wrap "
        >
          You got the travel plans, we got the travel vans.
        </h2>
        <p className=" text-2xl text-white font-bold   pt-14">
          Add adventure to your life by joining the vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="flex justify-center py-20">
          <button className=" bg-[#FF8C38] w-1/2 text-white font-bold text-2xl rounded-md py-4  ">
            Find your Van
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
