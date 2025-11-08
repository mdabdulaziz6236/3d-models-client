import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../Loading/Loading';
import { ModelCard } from '../../Components/ModelCard';

const MyDownloads = () => {
   const { user } = use(AuthContext);
  const [model, setModel] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`http://localhost:3000/my-downloads?email=${user.email}`,{
        headers:{
            authorization:`Bearer ${user.accessToken}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {model.map((model) => (
        <ModelCard key={model._id} model={model}></ModelCard>
      ))}
    </div>
  );
};

export default MyDownloads;