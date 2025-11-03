import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
  return <div>
    <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-3 mt-10">
        {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
  </div>;
};

export default Home;
