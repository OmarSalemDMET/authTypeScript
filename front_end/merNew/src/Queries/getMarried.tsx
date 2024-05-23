import { useState, useEffect } from "react";
import "../pages/regInfo.css";
import axios from "axios";
function Getmarried() {
  interface TypeInfo {
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

  const [resData, setResData] = useState<TypeInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fcFlag, setFcFlag] = useState(false);
  const [mcFlag, setMcFlag] = useState(false);
  const [maFlag, setMaFlag] = useState(false);
  const [ciFlag, setCiFlag] = useState(false);

  const displayHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getMarriedInfo",
        {
          withCredentials: true, // Ensure cookies are sent
        },
      );
      setResData(response.data);
      setLoading(false);
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.status));
    } catch (err) {
      setError("Couldn't get Info");
      setLoading(false);
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    displayHandler();
  }, []);
  return (
    <div>
      <ul>
        {resData.map((data, index) => (
          <li key={index}>
            <p className="smallHeader">First Name: {data.first_name}</p>
            <p className="smallHeader">Last Name: {data.last_name}</p>
            <p className="smallHeader">Gender: {data.gender}</p>
            <p className="smallHeader">
              Date of Birth: {new Date(data.date_of_birth).toLocaleDateString()}
            </p>
            <p className="smallHeader">National ID: {data.national_ID}</p>
            <p className="smallHeader">Marital Status: {data.marital_status}</p>
            <p className="smallHeader">Mobile Number: {data.mobile_number}</p>
            <p className="smallHeader">
              Academic Degree: {data.academic_degree}
            </p>
            <p className="smallHeader">Job Title: {data.job_title}</p>
            <p className="smallHeader">Address: {data.address}</p>
            <p className="smallHeader">Telephone: {data.telephone}</p>
            <p className="smallHeader">
              Number of Family Members: {data.NofamilyMem}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Getmarried;
