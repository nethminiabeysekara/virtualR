import React from "react";
import { testimonials } from "../constants";

function Testamoni() {
  return (
    <div className="mt-20">
      <h2 className="my-10 text-3xl text-center sm:text-5xl lg:text-6xl lg:my-20">
        What people are saying
      </h2>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="p-6 font-thin border rounded-md bg-neutral text-md border-nefont-thin">
              <p>{testimonial.text}</p>
              <div className="flex items-start mt-8">
                <img
                  className="w-12 h-12 mr-6 border rounded-full border-neutral-300"
                  src={testimonial.image}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm italic font-normal text-neutral-600 ">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testamoni;
