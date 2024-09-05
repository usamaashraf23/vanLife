import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutPic from "../assets/aboutUs.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <main>
        <img
          className=" h-2/5 w-full"
          src={`${AboutPic}`}
          alt="van night picture"
        />
        <div className="px-10 py-14">
          <h3 className=" text-3xl font-bold py-3 ">
            Don’t squeeze in a sedan when you could relax in a van.
          </h3>
          <p className=" text-xl  py-5">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className=" text-xl  py-5">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className=" bg-[#FFCC8D] px-10 py-12 rounded-md">
            <h3 className=" text-3xl font-bold">
              Your destination is waiting. Your van is ready.
            </h3>
            <Link to="/vans">
              <button className=" bg-black text-white p-4 rounded-lg font-bold mt-6">
                Explore Our Vans
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
