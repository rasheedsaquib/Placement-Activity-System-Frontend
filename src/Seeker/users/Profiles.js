import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

const Profiles =()=>{

    const[seeker,setSeekers]=useState({
        userName:"",
        emailId:"",
        phoneNo:"",
        qualification:"",
        skill:"",
    });

    const {id} =useParams();

    useEffect(()=>{
        loadSeeker();
    },[]);

    const loadSeeker= async () =>{
        const result = await axios.get(`http://localhost:8080/seek/seekers/${id}`);
        setSeekers(result.data);
    }

    return(
        <div className="container py-4">
            <h1 className="display-4">Profile Id:{id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Name:{seeker.userName}</li>
                <li className="list-group-item">Email:{seeker.emailId}</li>
                <li className="list-group-item">Contact No:{seeker.phoneId}</li>
                <li className="list-group-item">Qualification:{seeker.qualification}</li>
                <li className="list-group-item">SkillS:{seeker.skill}</li>
            </ul>
            <a className="btn btn-primary" href="/contant">Go Back</a>
        </div>

    );
}
export default Profiles;