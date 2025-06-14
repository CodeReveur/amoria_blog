import React from "react";
import ServiceCard from "../components/services/card";


const Services = () => {
  return (
    <section className="px-6 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <ServiceCard
            title="service 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            imgSrc=""
            />

            <ServiceCard
            title="service 2"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            imgSrc=""
            />

            <ServiceCard
            title="service 3"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            imgSrc=""
            />
            <ServiceCard
            title="service 4"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            imgSrc=""
            />
            <ServiceCard
            title="service 5"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            imgSrc=""
            
            />
        </div>
    </section>
  );
};

export default Services;
