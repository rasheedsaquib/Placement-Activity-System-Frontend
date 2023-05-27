import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Homep =()=> {

    const [clients,setClients]=useState([]);

    const[client]=useState({
      clientName:"",
      clientEmail:"",
      clientNumber:"",
      requiredQualification:"",
      requiredSkills:"",
  });

    useEffect(()=>{
      loadClient();
  },[]);

  const loadClient= async()=>{
      const result=await axios.get("http://localhost:8080/clt/clients",client);
      setClients(result.data)
  };
    

  return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
  <a  class="navbar-brand" to="">PROVIDER</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
	
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </li>
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contantp">Profile</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutp">About</a>
          </li>
          <useNavigate to='/logins'><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/loginp">Logout</a>
        </li></useNavigate>
      </ul>
      <a className="btn btn-outline-dark w-25" href="/addp">Add vacency</a>

    </div>
  </div>
</nav>
<div className='container'>
<table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">List of vacancy</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No</th>
      <th scope="col">Qualification</th>
      <th scope="col">Skills</th>
    </tr>
  </thead>
  <tbody>
    {clients.map((client,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{client.clientName}</td>
            <td>{client.clientEmail}</td>
            <td>{client.clientNumber}</td>
            <td>{client.requiredQualification}</td>
            <td>{client.requiredSkills}</td>
        </tr>
    ))}
  </tbody>
</table>
</div>
        </div>
    )
}
export default Homep;