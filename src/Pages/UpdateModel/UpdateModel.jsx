import { FolderPlus, ImageIcon, Upload } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";

const UpdateModel = () => {
  const { user } = use(AuthContext);
  const {id} =useParams()
const [model ,setModel]= useState({})
const [loading,setLoading]=useState(true)
useEffect(()=>{
   fetch(`http://localhost:3000/models/${id}`,{
    headers:{
      authorization: `Bearer ${user.accessToken}`
    }
   }).then(res => res.json())
   .then(data =>{
    setModel(data.result)
    setLoading(false)
   })
},[id,user])
  console.log(model);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      category: event.target.category.value,
      description: event.target.description.value,
      thumbnail: event.target.thumbnail.value,
      created_at: new Date(),
      download: 0,
      created_by: user.email,
    };
    fetch(`http://localhost:3000/models/${model._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Updated successfully.')

      })
      .catch((error) => {
        console.log(error);
      });
  };
if(loading){
  return <Loading></Loading>
}
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full  max-w-lg mx-auto bg-gradient-to-br from-indigo-50 to-purple-100 border border-gray-200 shadow-xl rounded-3xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            <FolderPlus className="inline-block mr-2 w-6 h-6" />
            Update Model
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Model Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Model Name
              </label>
              <input
                type="text"
                name="name"
                required
                defaultValue={model.name}
                placeholder="e.g. Solar Rover 3D"
                className="w-full input rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                defaultValue={model.category}
                required
                className="w-full select rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="" disabled>
                  Choose category
                </option>
                <option value="Vehicles">Vehicles</option>
                <option value="Nature">Nature</option>
                <option value="Architecture">Architecture</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Technology">Technology</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                required
                defaultValue={model.description}
                placeholder="Write something about this model..."
                className="textarea w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
              ></textarea>
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Thumbnail URL
              </label>
              <div className="flex items-center gap-2">
                <ImageIcon className="text-gray-500" />
                <input
                  type="url"
                  name="thumbnail"
                  defaultValue={model.thumbnail}
                  required
                  placeholder="https://example.com/image.jpg"
                  className="input w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>

            {/* Upload Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full btn text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                Update Model
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModel;
