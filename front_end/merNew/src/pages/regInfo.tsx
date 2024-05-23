import { useState } from "react";
import "./regInfo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegInfo() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [national_id, setNationalId] = useState("");
  const [marital_status, setMaritalStatus] = useState(""); // fixed spelling
  const [mobile_number, setMobileNumber] = useState("");
  const [academic_degree, setAcademicDegree] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [noOfFamilyMem, setNoOfFamilyMem] = useState(0);

  const printValues = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      first_name,
      last_name,
      gender,
      date_of_birth,
      national_ID: national_id,
      marital_status,
      mobile_number,
      academic_degree,
      job_title,
      address,
      telephone,
      NofamilyMem: noOfFamilyMem,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/regInfo",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error("There was an error", error);
    }
  };

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
      <div>
        <h1 className="bigHeader">Register Information</h1>
      </div>
      <div>
        <h3 className="smallHeader">
          {" "}
          please provide simple but accurate Information
        </h3>
      </div>
      <div className="centerDiv" id="divCont">
        <form onSubmit={printValues}>
          <input
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="First name"
            required
          />{" "}
          <input
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="Last name"
            required
          />{" "}
          <br /> <br />
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="SelectSty"
            required
          >
            <option value={null || ""}>Select a Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>{" "}
          <input
            value={date_of_birth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            className="InputSty"
            placeholder="Date of Birth"
            required
          />{" "}
          <br /> <br />
          <input
            value={national_id}
            onChange={(e) => setNationalId(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="National ID"
            required
          />{" "}
          <select
            value={marital_status}
            onChange={(e) => {
              setMaritalStatus(e.target.value);
            }}
            className="SelectSty2"
            required
          >
            <option value={null || ""}>Select Status</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
          </select>{" "}
          <br /> <br />
          <input
            value={mobile_number}
            onChange={(e) => setMobileNumber(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="Mobile Number"
            required
          />{" "}
          <input
            value={academic_degree}
            onChange={(e) => setAcademicDegree(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="Academic Degree"
            required
          />{" "}
          <br /> <br />
          <input
            value={job_title}
            onChange={(e) => setJobTitle(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="Job Title"
            required
          />{" "}
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="Address"
            required
          />{" "}
          <br /> <br />
          <input
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            type="text"
            className="InputSty"
            placeholder="Telephone"
            required
          />{" "}
          <input
            value={noOfFamilyMem}
            onChange={(e) => setNoOfFamilyMem(Number(e.target.value))}
            type="number"
            className="InputSty"
            placeholder="Number of Family Members"
            required
          />{" "}
          <br /> <br />
          <input type="submit" value="Submit" className="InputSty" />
          <button onClick={handleLogout} className="InputSty">Log out</button>
        </form>
      </div>
    </>
  );
}

export default RegInfo;
