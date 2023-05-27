import React,{useState,useEffect} from 'react';
import axios from 'axios';


const HomeA =()=> {
  const [admins,setAdmins]=useState([]);

  const[admin]=useState({
    firstName:"",
     lastName:"",
     emailId:"",
     
});

    useEffect(()=>{
        loadAdmin();
    },[]);

    const loadAdmin= async()=>{
        const result=await axios.get("http://localhost:8080/adm/admins",admin);
        setAdmins(result.data)
    };

    const deleteAdmin = async id => {
        await axios.delete(`http://localhost:8080/adm/admins/${id}`);
        loadAdmin();  
    };

    const[quary,setQuary]=useState("");
    const [data,SetData]=useState([])

    useEffect(()=>{
      const fetchAdmins=async()=>{
        const res=await axios.get("http://localhost:8080/adm/admins",admin);
        SetData(res.data);
      };
        fetchAdmins()
    },[])


    

  return(
        <div>
          
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
  <useNavigate to="profilep"><a  class="navbar-brand" to="">ADMIN</a></useNavigate >
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
	
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search..."  onChange={e=> setQuary(e.target.value)} to="/search" data={admins}/>
        <button class="btn btn-outline-success" type="submit" href="/search">Search</button>
      </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contantA">Clients</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/providerA">Providers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/seekerA">Seekers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutA">About</a>
          </li>
          <useNavigate to='/loginadmin'><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/loginadmin">Logout</a>
        </li></useNavigate>
      </ul>
          <a className="btn btn-outline-dark w-25" href="/addA">Add User</a>   
    </div>
  </div>
</nav>
<div className='container'>
<table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">List of admins</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {admins.map((admin,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{admin.firstName}</td>
            <td>{admin.lastName}</td>
            <td>{admin.emailId}</td>
            <td>
            <a class="btn btn-outline-primary p-2" aria-current="page" href={`/viewA/${admin.id}`}>View</a>{' '} 
                <a class="btn bg-primary" aria-current="page" href={`/updateA/${admin.id}`}>Update</a>{' '} 
                <a class="btn bg-danger" aria-current="page" onClick={()=>deleteAdmin(admin.id)} href='/loginadmin'>Delete</a>
                 
            </td>
        </tr>
    ))}
  </tbody>
</table>
</div>
</div>
    )
}
export default HomeA;