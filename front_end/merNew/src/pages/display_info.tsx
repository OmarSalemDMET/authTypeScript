import axios from "axios";
import { useState, useEffect } from "react";
interface TypeInfo{
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: Date;
    national_ID: string;
    marital_status: string;
    mobile_number: string;
    academic_degree: string;
    job_title: string;
    address: string;
    telephone: string;
    NofamilyMem: number;
}
function DisplayInfo(natID : string){
    const [resData, setResData] = useState<TypeInfo[]>([])
    const diplayHandler = async () => {
        const payLoad = {
            nationalID : natID
        }

        try{
            const response = await axios.post("http://localhost:3000/api/dispInfo", payLoad,
            {
                headers: {
                  "content-type": "application/json",
                },
              },
            )
            setResData(response.data)
            console.log(JSON.stringify(response.data))
            console.log(JSON.stringify(response.status))
        }catch(err){
            console.log("Couldn't get Info")
        }

        useEffect(() => {
            diplayHandler();
        }, []);

    }

    return(
        <>
        <div>
            <ul>
            {resData.map((data, index) => (
                <li key={index}>
                    <p>First Name: {data.first_name}</p>
                    <p>Last Name: {data.last_name}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Date of Birth: {new Date(data.date_of_birth).toLocaleDateString()}</p>
                    <p>National ID: {data.national_ID}</p>
                    <p>Marital Status: {data.marital_status}</p>
                    <p>Mobile Number: {data.mobile_number}</p>
                    <p>Academic Degree: {data.academic_degree}</p>
                    <p>Job Title: {data.job_title}</p>
                    <p>Address: {data.address}</p>
                    <p>Telephone: {data.telephone}</p>
                    <p>Number of Family Members: {data.NofamilyMem}</p>
                </li>
            ))}
            </ul>
        </div>
        </>
    );
}

export default DisplayInfo