import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";
import Loading from "../Loading/Loading";

const AllModels = () => {
  const data = useLoaderData();
  const [models,setModels]= useState(data)
  const [loading,setLoading]=useState(false)

  const handleSearch = (event)=>{
    event.preventDefault()
    const search_text =event.target.search.value;
    console.log(search_text)
    setLoading(true)
    fetch(`http://localhost:3000/search?search=${search_text}`)
    .then(res =>res.json()).then(data =>{
      if(data){
        setModels(data)
        setLoading(false)
      }
    })

  }
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="pt-5 text-5xl text-center font-bold"> All Models</h1>
      <p className=" text-center pt-3 font-semibold  mb-10 ">
        Explore 3d models.
      </p>
    <form onSubmit={handleSearch} className="flex mb-10 justify-center items-center">
            <label className="input rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" name="search" placeholder="Search" />
      </label>
      <button type="submit" className="btn ml-1.5 rounded-full btn-secondary">Search</button>
    </form>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
