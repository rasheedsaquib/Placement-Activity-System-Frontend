import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

const ProfileC =()=>{

    const[client,setClients]=useState({
        clientName:"",
        clientEmail:"",
        clientNumber:"",
        requiredQualification:"",
        requiredSkills:"",
    });

    const {id} =useParams();

    useEffect(()=>{
        loadClient();
    },[]);

    const loadClient= async () =>{
        const result = await axios.get(`http://localhost:8080/clt/clients/${id}`);
        setClients(result.data);
    }

    return(
        <div className="container py-4">
            <h1 className="display-4">Profile Id:{id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Company:{client.clientName}</li>
                <li className="list-group-item">Email:{client.clientEmail}</li>
                <li className="list-group-item">Contact:{client.clientNumber}</li>
                <li className="list-group-item">Qualification:{client.requiredQualification}</li>
                <li className="list-group-item">Skils:{client.requiredSkills}</li>
            </ul>
            <a className="btn btn-primary" href="/homec">Back to Home</a>
        </div>

    );
}
export default ProfileC;