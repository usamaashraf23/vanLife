import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  return (
    <div>
      <Navbar />
      <div>
        <Link to="/vans">
          <span className=" text-xl text-black font-semibold underline my-6 px-10">
            Back to all vans
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        {van ? (
          <div className="flex flex-col justify-center  w-10/12    ">
            <img src={van.imageUrl} className="rounded-md my-5 h-1/2  " />
            <div>
              <span
                className={`text-white text-xl ${van.type} my-6 text-center   py-2 px-5  rounded font-bold `}
              >
                {van.type}
              </span>
            </div>
            <h1 className="text-3xl font-bold my-3 ">{van.name}</h1>
            <p className="text-xl font-bold">
              ${van.price} <span className="font-semibold">/day</span>
            </p>
            <p className="font-semibold my-2">{van.description}</p>
            <button className=" bg-[#FF8C38] font-bold text-2xl text-white my-6  py-2 rounded">
              Rent this Van
            </button>
          </div>
        ) : (
          <h1>loading....</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default VanDetails;
