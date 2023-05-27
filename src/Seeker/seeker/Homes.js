import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';


const Homes =()=> {

    const [providers,setProviders]=useState([]);

    useEffect(()=>{
        loadProvider();
    },[]);

    const loadProvider= async()=>{
        const result=await axios.get("http://localhost:8080/prov/providers");
        setProviders(result.data)
    };

    

  return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
  <a  class="navbar-brand" href="">SEEKER</a>
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
          <a class="nav-link active" aria-current="page" href="/contant">Profile</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about">About</a>
          </li>
          <useNavigate to='/logins'><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/logins">Logout</a>
        </li></useNavigate>
      </ul>
      
          <a className="btn btn-outline-dark w-25" href="/adds">Add User</a>
        
    </div>
  </div>
  
</nav>
<div className='container'>
<table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">List of jobs</th>
      <th scope="col">Company Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Contact No</th>
      <th scope="col">Number of vacancy</th>
      <th scope="col">Last date to apply</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {providers.map((provider,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{provider.providerName}</td>
            <td>{provider.providerEmail}</td>
            <td>{provider.providerNumber}</td>
            <td>{provider.vacancy}</td>
            <td>{provider.deadLine}</td>
            <td>
            <a class="btn btn-outline-primary" aria-current="page" href="">Apply</a>
            </td>
        </tr>
    ))}
  </tbody>
</table>
</div>
        </div>
    )
}
export default Homes;