import { useState } from "react"
import axios, { AxiosResponse } from 'axios';
import '../styles/login.css'
function LogingIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState<string | null>(null);

    interface PostData {
        email: string;
        password: string;
      }
    interface LoginResponse {
        token: string;
      }
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault;
        const myData : PostData = {
            email : email,
            password : password
        }
        try{
        console.log("hello")
         await axios.post('/api/Login', {
            email1 : email,
            password1 : password
        }).then().catch(() => console.log("failed"))
        }catch(error : any){
        console.log("Failed to login:", error.message);

    }
    }
    

    return(
        <>
            <div id = "divCont" className="divContainer" >
                <div id = "boxCont" className="boxCont">
                    <form onSubmit={handleSubmit}>
                        <input className = "inputCont" type="text" placeholder="Email" value={email}
                        onChange={(e : React.FormEvent<HTMLInputElement>) => {
                            setEmail(e.currentTarget.value)
                        }}/>
                        <br/>
                        <br/>
                        <input className = "inputCont" type="password" placeholder="password" value={password}
                         onChange={(e : React.FormEvent<HTMLInputElement>) => {
                            setPassword(e.currentTarget.value)
                        }}/>
                        <br/>
                        <br/>
                        <input type="submit" value="Login" className="buttonSub" />
                    </form>
                </div>
            </div>
        </>
    )
    }
export default LogingIn