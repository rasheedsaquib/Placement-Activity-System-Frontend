import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

const ViewA =()=>{

    const[admin,setAdmins]=useState({
        firstName:"",
        lastName:"",
        emailId:"",
  
    });

    const {id} =useParams();

    useEffect(()=>{
        loadAdmin();
    },[]);

    const loadAdmin= async () =>{
        const result = await axios.get(`http://localhost:8080/adm/admins/${id}`);
        setAdmins(result.data);
    }

    return(
        <div className="container py-4">
            <h1 className="display-4">Profile Id:{id}</h1>
            <hr/>
            <ul className="list-group w-50 center">
                <li className="list-group-item">First_Name:{admin.firstName}</li>
                <li className="list-group-item">Last_Name:{admin.lastName}</li>
                <li className="list-group-item">Email:{admin.emailId}</li>
            </ul>
            <a className="btn btn-primary" href="/homeA">Back to Home</a>
        </div>

    );
}
export default ViewA;