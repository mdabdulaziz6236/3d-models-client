import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="pt-5 text-5xl text-center font-bold"> All Models</h1>
      <p className=" text-center pt-3 font-semibold  mb-10 ">
        Explore 3d models.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data.map(model => <ModelCard key={model._id} model={model}></ModelCard>)
      }
      </div>
      
    </div>
  );
};

export default AllModels;
