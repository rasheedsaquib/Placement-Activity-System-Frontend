import React,{useState,useEffect}  from "react";
import axios from 'axios';

const SeekerA =()=> {

    const [seekers,setSeekers]=useState([]);

  const[seeker]=useState({
    userName:"",
     emailId:"",
     phoneNo:"",
     qualification:"",
     skill:"",
});

    useEffect(()=>{
        loadSeeker();
    },[]);

    const loadSeeker= async()=>{
        const result=await axios.get("http://localhost:8080/seek/seekers",seeker);
        setSeekers(result.data)
    };

    const deleteSeeker = async id => {
        await axios.delete(`http://localhost:8080/seek/seekers/${id}`);
        loadSeeker();  
    };

    return(
            <div>
                <h1 align="center">List of seekers</h1>
                <div className='container'>
                <table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">Seekers</th>
      <th scope="col">Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Contact No</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {seekers.map((seeker,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{seeker.userName}</td>
            <td>{seeker.emailId}</td>
            <td>{seeker.phoneNo}</td>
            <td>
            <a class="btn btn-outline-primary p-2" aria-current="page" href={`/profiles/${seeker.id}`}>View</a>{' '} 
                <a class="btn bg-primary" aria-current="page" href={`/updates/${seeker.id}`}>Update</a>{' '} 
                <a class="btn bg-danger" aria-current="page" onClick={()=>deleteSeeker(seeker.id)} href='/loginadmin'>Delete</a>
                 
            </td>
        </tr>
    ))}
  </tbody>
</table>
<a className="btn btn-primary" href="/homeA">Go Back</a>
</div>
            </div>
        )
        
    }
 
 export default SeekerA;