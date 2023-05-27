import React,{useState,useEffect} from 'react';
import axios from 'axios';


const HomeC =()=> {
  const [clients,setClients]=useState([]);

  const[client]=useState({
    clientName:"",
    clientEmail:"",
    clientNumber:"",
    requiredQualification:"",
    requiredSkils:"",
});

    useEffect(()=>{
        loadClient();
    },[]);

    const loadClient= async()=>{
        const result=await axios.get("http://localhost:8080/clt/clients",client);
        setClients(result.data)
    };

    const deleteClient = async id => {
        await axios.delete(`http://localhost:8080/clt/clients/${id}`);
        loadClient();  
    };

  return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
  <a  class="navbar-brand" to="">CLIENT</a>
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
          <a class="nav-link active" aria-current="page" href="/contantc">Contant</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutc">About</a>
          </li>
          <useNavigate to='/loginadmin'><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/loginc">Logout</a>
        </li></useNavigate>
      </ul>
      
          <a className="btn btn-outline-dark w-25" href="/addc">Add User</a>
        
    </div>
  </div>
</nav>
<div className='container'>
<table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">Client</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {clients.map((client,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{client.clientName}</td>
            <td>{client.clientEmail}</td>
            <td>{client.clientNumber}</td>
            <td>
            <a class="btn btn-outline-primary p-2" aria-current="page" href={`/profilec/${client.id}`}>View</a>{' '} 
                <a class="btn bg-primary" aria-current="page" href={`/update/userc/${client.id}`}>Update</a>{' '} 
                <a class="btn bg-danger" aria-current="page" onClick={()=>deleteClient(client.id) } href="/loginc">Delete</a>
               
            </td>
        </tr>
    ))}
  </tbody>
</table>
 </div>
</div>
        
    )
}
export default HomeC;