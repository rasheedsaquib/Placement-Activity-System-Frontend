import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
const LoginC =()=>{

    let history=useHistory();
    const[client,setClients]=useState({
        clientName:"",
        clientEmail:"",
        clientNumber:"",
        requiredQualification:"",
        requiredSkills:"",
    });

    const {clientName,clientEmail,clientNumber,requiredQualification,requiredSkills}=client;
    const onInputChange=e=>{
        setClients({...client,[e.target.name]:e.target.value});
    };

    const onSubmit= async e=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/clt/clients",client);
        history.push("/homec");
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Client Registeration</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Company Name"
                        name="clientName"
                        value={clientName}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name="clientEmail"
                        value={clientEmail}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Contact Number"
                        name="clientNumber"
                        value={clientNumber}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Required Qualification"
                        name="requiredQualification"
                        value={requiredQualification}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Skills"
                        name="requiredSkills"
                        value={requiredSkills}
                        onChange={e => onInputChange(e)}
                        required/>
                    </div>
                    <button className="btn bg-success">Save</button>{' '} 
                    <a className="btn btn-primary" href="/">Back to home</a>
                </form>
                <p>Register here for employee search</p>
            </div>
        </div>
    );
}
export default LoginC;