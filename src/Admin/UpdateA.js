import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";


const UpdateA = () => {

    let history=useHistory();
    const {id}=useParams();
    const[admin,setAdmins]=useState({
        firstName:"",
        lastName:"",
        emailId:"",

    });

    const {firstName,lastName,emailId}=admin;
    const onInputChange=e=>{
        setAdmins({...admin,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadAdmin();
    },[]);

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/adm/admins/${id}`,admin);
        history.push("/homeA");
    };
    const loadAdmin= async () =>{
        const result = await axios.get(`http://localhost:8080/adm/admins/${id}`,admin);
        setAdmins(result.data);
    };



    return(
        <div className='container'>
           <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Update Profile</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter firstname"
                        name="firstName"
                        value={firstName}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter lastname"
                        name="lastName"
                        value={lastName}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name="emailId"
                        value={emailId}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Update User</button>{' '} 
                    <a className="btn btn-primary" href="/homeA">Back to Home</a>
                </form>
            </div>
           
        </div>
    );
}
   

export default UpdateA;