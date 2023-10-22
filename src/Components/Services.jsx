/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import arrow from "../assets/frame.svg";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center mt-20 lg:mt-32">
      <h2 className="text-primary-color font-semibold">Services</h2>
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">Our Service Areas</h2>
        <p className="text-[#737373] text-sm lg:w-1/2 mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          veritatis obcaecati deserunt porro, repudiandae doloribus cum.
          Quibusdam excepturi pariatur eligendi!
        </p>
      </div>
      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <ServiceCards key={service.id} service={service}></ServiceCards>
        ))}
      </div>
    </div>
  );
};

export default Services;

const ServiceCards = ({ service }) => {
  const { img, title, price } = service;

  return (
    <div>
      <div className="card w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={title} className="rounded-lg w-4/5" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-primary-color font-semibold">Price: ${price}</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
