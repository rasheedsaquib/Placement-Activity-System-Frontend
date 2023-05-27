import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Login =()=>{

    let history=useHistory();
    const[seeker,setSeekers]=useState({
        userName:"",
        emailId:"",
        phoneNo:"",
        qualification:"",
        skill:"",
    });

    const {userName,emailId,phoneNo,qualification,skill}=seeker;
    const onInputChange=e=>{
        setSeekers({...seeker,[e.target.name]:e.target.value});
    };

    const onSubmit= async e=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/seek/seekers",seeker);
        history.push("/homes");
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Seekers Registeration</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="userName"
                        value={userName}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="emailId"
                        value={emailId}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Contact Number"
                        name="phoneNo"
                        value={phoneNo}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Qualification"
                        name="qualification"
                        value={qualification}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Skills"
                        name="skill"
                        value={skill}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <button className="btn bg-success">Save</button>{' '} 
                    <a className="btn btn-primary" href="/">Back to home</a>

                </form>
                <p>Register here for job search</p>
            </div>
        </div>
    );
}
export default Login;