import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Van() {
  let [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div>
      <Navbar />

      <h1 className=" text-3xl font-bold py-5 px-10">
        Explore Our Vans Here 🚐
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 my-20 justify-items-center">
          {vans.map((van) => {
            let bg = "";
            if (van.type == "simple") {
              bg = "bg-[#E17654]";
            } else if (van.type == "rugged") {
              bg = "bg-[#115E59]";
            } else {
              bg = "bg-[#161616]";
            }
            return (
              <div className="sm:w-96 mx-4 my-4 rounded-lg " key={van.id}>
                <Link to={`/vans/${van.id}`}>
                  <img src={van.imageUrl} className="rounded" />
                  <div className="flex items-baseline justify-between mt-4">
                    <div>
                      <h1 className="text-2xl  font-bold">{van.name}</h1>
                    </div>
                    <div className="">
                      <span className="font-bold text-2xl">${van.price}</span>
                      <br />
                      <span>/day</span>
                    </div>
                  </div>
                  <div className="my-4">
                    <span
                      className={` text-white text-xl ${bg} py-2 px-5 rounded font-bold `}
                    >
                      {van.type}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Van;
