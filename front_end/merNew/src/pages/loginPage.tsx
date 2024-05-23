import { useState } from "react";
import "./regInfo.css";
import axios from "axios";

function LoginPanal() {
  const [username, setUserName] = useState("");
  const [passW, setPassW] = useState("");

  const logInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payLoad = {
      email: username,
      password: passW,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/Login",
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
      console.log("there was an error  : ", err);
    }
  };

  return (
    <>
      <div>
        <h1 className="bigHeader">Login</h1>
      </div>
      <div className="centerDiv">
        <form onSubmit={logInHandler}>
          <input
            className="InputSty"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
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
          <br />
          <br />
          <input type="submit" className="InputSty" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default LoginPanal;
