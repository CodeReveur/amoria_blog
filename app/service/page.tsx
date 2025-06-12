import React from "react";
import ServiceCard from "../components/services/card";

const Services = () => {
  return (
    <section className="px-6 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <ServiceCard
            title="Web Development"
            description="Building responsive and modern websites."
            imgSrc="/images/web-development.jpg"
            />
            <ServiceCard
            title="Mobile App Development"
            description="Creating user-friendly mobile applications."
            imgSrc="/images/mobile-app.jpg"
            />
            <ServiceCard
            title="UI/UX Design"
            description="Designing intuitive user interfaces and experiences."
            imgSrc="/images/ui-ux.jpg"
            />
            <ServiceCard
            title="Digital Marketing"
            description="Promoting your brand through digital channels."
            imgSrc="/images/digital-marketing.jpg"
            />
        </div>
    </section>
  );
};

export default Services;
