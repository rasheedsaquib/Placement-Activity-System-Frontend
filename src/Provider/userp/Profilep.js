import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

const Profilep =()=>{

    const[provider,setProviders]=useState({
        providerName:"",
        providerEmail:"",
        providerNumber:"",
        vacancy:"",
        deadLine:"",
    });

    const {id} =useParams();

    useEffect(()=>{
        loadProvider();
    },[]);

    const loadProvider= async () =>{
        const result = await axios.get(`http://localhost:8080/prov/providers/${id}`);
        setProviders(result.data);
    }

    return(
        <div className="container py-4">
            <h1 className="display-4">Profile Id:{id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Name:{provider.providerName}</li>
                <li className="list-group-item">Email:{provider.providerEmail}</li>
                <li className="list-group-item">Contact No:{provider.providerNumber}</li>
                <li className="list-group-item">Vacency:{provider.vacancy}</li>
                <li className="list-group-item">Deadline:{provider.deadLine}</li>
            </ul>
            <a className="btn btn-primary" href="/contantp">Go Back</a>
        </div>

    );
}
export default Profilep;