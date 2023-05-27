import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";


const Updates = () => {

    let history=useHistory();
    const {id}=useParams();
    const[seeker,setSeekers]=useState({
        userName:"",
        emailId:"",
        phoneNo:"",
        qualification:"",
        skill:"",
    });

    const {userName,emailId,phoneNo,qualification,skill}=seeker;
    const onInputChange=e=>{
        setSeekers({...seeker,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadSeeker();
    },[]);

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/seek/seekers/${id}`,seeker);
        history.push("/contant");
    };
    const loadSeeker= async () =>{
        const result = await axios.get(`http://localhost:8080/seek/seekers/${id}`,seeker);
        setSeekers(result.data);
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
                        name="userName"
                        value={userName}
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
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Contact Number"
                        name="phoneNo"
                        value={phoneNo}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Qualification"
                        name="qualification"
                        value={qualification}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Skills"
                        name="skill"
                        value={skill}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Update User</button>{' '} 
                    <a className="btn btn-primary" href="/contant">Go Back</a>

                </form>
            </div>
           
        </div>
    );
}
   

export default Updates;