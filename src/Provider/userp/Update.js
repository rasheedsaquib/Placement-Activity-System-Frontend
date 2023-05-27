import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";


const Update = () => {

    let history=useHistory();
    const {id}=useParams();
    const[provider,setProviders]=useState({
        providerName:"",
        providerEmail:"",
        providerNumber:"",
        vacancy:"",
        deadLine:"",
    });

    const {providerName,providerEmail,providerNumber,vacancy,deadLine}=provider;
    const onInputChange=e=>{
        setProviders({...provider,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadProvider();
    },[]);

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/prov/providers/${id}`,provider);
        history.push("/contantp");
    };
    const loadProvider= async () =>{
        const result = await axios.get(`http://localhost:8080/prov/providers/${id}`,provider);
        setProviders(result.data);
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
                        placeholder="Enter Your Contact Number"
                        name="providerNumber"
                        value={providerNumber}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Number Of Vacancy"
                        name="vacancy"
                        value={vacancy}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Last Date To Apply"
                        name="deadLine"
                        value={deadLine}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Update User</button>{' '} 
                    <a className="btn btn-primary" href="/contantp">Go Back</a>

                </form>
            </div>
           
        </div>
    );
}
   

export default Update;