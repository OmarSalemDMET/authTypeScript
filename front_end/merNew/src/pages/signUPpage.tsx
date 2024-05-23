import axios from "axios";
import { useState } from "react";
import "./regInfo.css";
function SignUPpanal() {
  const [uName, setUName] = useState("");
  const [eMail, setEMail] = useState("");
  const [natID ,setNatID] = useState("");
  const [passW, setPassW] = useState("");

  const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payLoad = {
      name: uName,
      email: eMail,
      nationalID : natID,
      password: passW,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        payLoad,
        {
          headers: {
            "content-type": "application/json",
          },
        },
      );
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data.token));
    } catch (err) {
      console.log("There was an error : ", err);
    }
  };

  return (
    <>
      <div>
        <h1 className="bigHeader">SignUP</h1>
      </div>
      <div className="centerDiv">
        <form onSubmit={signUpHandler}>
          <input
            className="InputSty"
            value={uName}
            onChange={(e) => {
              setUName(e.target.value);
            }}
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            className="InputSty"
            value={eMail}
            onChange={(e) => {
              setEMail(e.target.value);
            }}
            placeholder="Enter Email"
            type="text"
          />
          <br/>
          <br/>
          <input
            className="InputSty"
            value={natID}
            onChange={(e) => {
              setNatID(e.target.value);
            }}
            placeholder="Enter Email"
            type="text"
          />
          <br />
          <br />
          <input
            className="InputSty"
            value={passW}
            onChange={(e) => {
              setPassW(e.target.value);
            }}
            placeholder="Enter Password"
            type="password"
          />
          <input type="submit" className="InputSty" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default SignUPpanal;
