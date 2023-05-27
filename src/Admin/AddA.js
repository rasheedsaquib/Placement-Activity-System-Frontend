import axios from "axios";
import React, {useState} from "react";
import {useHistory } from "react-router-dom";

const AddA =()=>{

    let history=useHistory();
    const[admin,setAdmins]=useState({
        firstName:"",
        lastName:"",
        emailId:"",
       
    });

    const {firstName,lastName,emailId}=admin;
    const onInputChange=e=>{
        setAdmins({...admin,[e.target.name]:e.target.value});
    };

    const onSubmit= async e=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/adm/admins",admin);
        history.push("/homeA");
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Admin</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your firstname"
                        name="firstName"
                        value={firstName}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your lastname"
                        name="lastName"
                        value={lastName}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="emailId"
                        value={emailId}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Save</button>{' '} 
                    <a className="btn btn-primary" href="/homeA">Go Back</a>
                </form>
            </div>
        </div>
    );
}
export default AddA;