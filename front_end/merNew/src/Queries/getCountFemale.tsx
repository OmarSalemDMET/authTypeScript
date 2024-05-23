import axios from "axios";
import { useEffect, useState } from "react";
import "../pages/regInfo.css";
function GetFemale() {
  const [femaleCount, setFemaleCount] = useState(0);
  const handleGetCount = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/countFemale");

      setFemaleCount(response.data.count);
    } catch (error) {
      console.log("Couldn't retrieve data");
    }
  };

  useEffect(() => {
    handleGetCount();
  }, []);
  return (
    <>
      <div className="bigHeader"> Female Count : {femaleCount}</div>
    </>
  );
}

export default GetFemale;
