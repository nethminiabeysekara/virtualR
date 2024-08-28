import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

function Subsection() {
  return (
    <div className="mt-20 text-center ">
      <p className="text-3xl tracking-wide texts-center sm:text-4xl lg:text-5xl">
        Accelerate your
        <span className="text-transparent bg-red-800 bg-orange-600 bg-gradient-to-r from to bg-clip-text">{' '}coding workflow.</span>
      </p>
      <div className="flex flex-wrap justify-center mt-20"> 
        <div className="w-full p-2 lg:w-1/2">
        <img src={codeImg} />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
        {checklistItems.map((item,index )=>(
            <div key={index} className="flex mb-12">
                <div className="justify-center w-10 h-10 p-2 mx-6 text-green-400 rounded-full bg-neutral-900">
                    <CheckCircle2 /> 
                </div>
                <div>
                    <h5  className="mt-1 mb-2 text-xl">{item.title} </h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                </div>
                </div>
        ))}
       
        </div>
        </div>
      </div>
   
  );
}

export default Subsection;
