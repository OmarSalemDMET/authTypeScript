import axios from "axios";
import { useState, useEffect } from "react";
import "../pages/regInfo.css";
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

function GetCountC() {
  const [resData, setResData] = useState<TypeInfo[]>([]);
  const [resInfo, setInfoData] = useState<TypeInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cc, setCC] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [sameCity, setSameCity] = useState<string[][]>([]);
  const [indec, setIndec] = useState<string[]>([]);
  const displayHandler = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/dispInfo", {
        withCredentials: true, // Ensure cookies are sent
      });
      setResData(response.data);
      setInfoData(response.data);
      setLoading(false);
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.status));
      let count = 0;
      let samecity: string[][] = [];
      let temp: string[] = [];
      let index: string[] = [];
      resData.forEach((data) => {
        if (!(index.indexOf(data.address) != -1)) {
          resInfo.forEach((val) => {
            if (val.address == data.address) {
              count++;
              temp.push(val.first_name + " " + val.last_name);
            }
          });
        }
        samecity.push(temp);
        temp = [];
        index.push(data.address);
      });

      setSameCity(samecity);
      setIndec(index);
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
    <>
      <div className="centerDiv">
        {indec.map((city, cityIndex) => (
          <div className="bigHeader" key={cityIndex}>
            <h2 className="smallHeader">{city}</h2>
            <ul className="smallHeader">
              {sameCity[cityIndex].map((person, personIndex) => (
                <li key={personIndex}>{person}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default GetCountC;
