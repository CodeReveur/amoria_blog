import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc?: string;
}

const ServiceCard = ({ title, description, imgSrc }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center max-w-xs mx-auto">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          className="mx-auto mb-4 h-24 w-24 object-cover rounded"
        />
      )}
      <h3 className="text-black text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
