import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const AddP =()=>{

    let history=useHistory();
    const[provider,setProvides]=useState({
        providerName:"",
        providerEmail:"",
        providerNumber:"",
        vacancy:"",
        deadLine:"",
    });
    

    const {providerName,providerEmail,providerNumber,vacancy,deadLine}=provider;
    const onInputChange=e=>{
        setProvides({...provider,[e.target.name]:e.target.value});
    };

    const onSubmit= async e=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/prov/providers",provider);
        history.push("/homep",);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="providerName"
                        value={providerName}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="providerEmail"
                        value={providerEmail}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Contact Number"
                        name="providerNumber"
                        value={providerNumber}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Number Of Vacancys"
                        name="vacancy"
                        value={vacancy}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Last Date to Apply"
                        name="deadLine"
                        value={deadLine}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>{' '} 
                    <a className="btn btn-primary" href="/homep">Go Back</a>

                </form>
            </div>
        </div>
    );
}
export default AddP;