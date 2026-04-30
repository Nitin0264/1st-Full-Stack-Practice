import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (

    <div className="h-screen flex flex-col justify-center items-center text-3xl gap-5">
      <h1>Welcome to Dashboard </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>

    </div>
  )
}

export default About;
