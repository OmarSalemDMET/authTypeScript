// src/pages/HomePage.tsx

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            const response = await axios.post('http://localhost:3000/api/logout',{})

            console.log(response)
            const gUser = localStorage.getItem('user') || ""
            const gpUser = JSON.parse(gUser)
            localStorage.setItem('user', JSON.stringify({}));
            gpUser.token = null

            navigate('/login');
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <div>Welcome to the Home Page</div>
    <button onClick={handleLogout}>Log Out</button>
  
    </>

            );
};

export default HomePage;