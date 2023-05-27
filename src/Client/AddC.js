import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const AddC =()=>{

    let history=useHistory();
    const[client,setClients]=useState({
        clientName:"",
        clientEmail:"",
        clientNumber:"",
        requiredQualification:"",
        requiredSkils:"",
    });

    const {clientName,clientEmail,clientNumber,requiredQualification,requiredSkils}=client;
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
                <h2 className="text-center mb-4">Registered Here</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
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
                        placeholder="Enter Qualification"
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
                        name="requiredSkils"
                        value={requiredSkils}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add user</button>{' '} 
                    <a className="btn btn-primary" href="/homec">Go Back</a>

                </form>
            </div>
        </div>
    );
}
export default AddC;