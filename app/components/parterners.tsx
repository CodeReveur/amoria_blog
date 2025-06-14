import React from 'react';

const Partners: React.FC = () => {
  return (
     <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            <img src="" alt="Partner 1" className="h-16 mx-auto" />
            <img src="" alt="Partner 2" className="h-16 mx-auto" />
            <img src="" alt="Partner 3" className="h-16 mx-auto" />
            <img src="" alt="Partner 4" className="h-16 mx-auto" />
          </div>
        </div>
      </section>
  );
};

export default Partners;
