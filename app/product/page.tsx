import React from "react";
import ProductCard from "../components/product/card";

const Products = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-black mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto h-50">
        <ProductCard
          title="Sample 1"
          description="Lorem Ipsum is a widely used placeholder text in design and publishing, originating from a work by Cicero, and is often generated for use in layouts and mockups."
          
          imgSrc=""
        />
        <ProductCard
          title="sample 2"
          description="Lorem Ipsum is a widely used placeholder text in design and publishing, originating from a work by Cicero, and is often generated for use in layouts and mockups."
          
          imgSrc=""
        />
        <ProductCard
          title="sample 3"
          description="Lorem Ipsum is a widely used placeholder text in design and publishing, originating from a work by Cicero, and is often generated for use in layouts and mockups."
          
          imgSrc=""
        />
        <ProductCard
          title="sample 4"
          description="Lorem Ipsum is a widely used placeholder text in design and publishing, originating from a work by Cicero, and is often generated for use in layouts and mockups."
          
          imgSrc=""
        />
      </div>
    </section>
  );
};

export default Products;
