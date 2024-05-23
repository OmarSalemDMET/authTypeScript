import axios from "axios";
import { useEffect, useState } from "react";
import "../pages/regInfo.css";
function GetMale() {
  const [MaleCount, setMaleCount] = useState(0);
  const handleGetCount = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/countMale");

      setMaleCount(response.data.count);
    } catch (error) {
      console.log("Couldn't retrieve data");
    }
  };

  useEffect(() => {
    handleGetCount();
  }, []);
  return (
    <>
      <div className="bigHeader"> male Count : {MaleCount}</div>
    </>
  );
}

export default GetMale;
