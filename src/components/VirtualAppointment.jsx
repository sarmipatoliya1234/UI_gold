import React from "react";
import virtualImage from "../assets/products/virtualImage.svg";

const VirtualAppointment = () => {
  return (
    <section className="py-8">
      <img src={virtualImage} alt="" className="h-[488px] w-full" />
    </section>
  );
};

export default VirtualAppointment;
