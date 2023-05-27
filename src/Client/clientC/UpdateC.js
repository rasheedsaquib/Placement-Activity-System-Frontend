import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";


const UpdateC = () => {

    let history=useHistory();
    const {id}=useParams();
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

    useEffect(()=>{
        loadClient();
    },[]);

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/clt/clients/${id}`,client);
        history.push("/homec");
    };
    const loadClient= async () =>{
        const result = await axios.get(`http://localhost:8080/clt/clients/${id}`,client);
        setClients(result.data);
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
                        placeholder="Enter Company Name"
                        name="clientName"
                        value={clientName}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name="clientEmail"
                        value={clientEmail}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Contact Number"
                        name="clientNumber"
                        value={clientNumber}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Required Qualification"
                        name="requiredQualification"
                        value={requiredQualification}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Skills"
                        name="requiredSkills"
                        value={requiredSkills}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Update User</button>{' '} 
                    <a className="btn btn-primary" href="/homec">Go Back</a>

                </form>
            </div>
           
        </div>
    );
}
   

export default UpdateC;