import React, {useState, useEffect} from "react";
import img1 from './images/job.jpg';
import img2 from './images/provider.jpg';
import img4 from './images/ss-1.jpg';
import img3 from './images/admin.jpg';
import axios from "axios";


function Main(){

  const[clients,setClients]=useState([]);
  useEffect(()=>{
    loadClient();
  },[]);

  const loadClient= async () =>{
    const result=await axios.get("http://localhost:8080/clt/clients");
    setClients(result.data);
  }



    return(
      <div>
        <div class="card-header bg-dark text-white">
    <h1>Placement Activity System</h1>
    <cite title="Source Title">Placement Activity System is a web application designed to facilitate job seekers and companies in the job recruitment process.</cite>
</div>
           <div class="p-2 rounded float-start">
           <h5 class="card-title">Job Seeker</h5>
           <img src={img1} class="rounded" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Looking for jobs... Here you find jobs in your profession</p>
    <a href="logins" class="btn btn-primary">Job search</a>
  </div>
</div>


<div class="p-2 rounded float-end">
<h5 class="card-title">Job Provider</h5>
<img src={img2} class="rounded" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Here you find jobs and employees in your profession</p>
    <a href="/loginp" class="btn btn-primary">Job Provider</a>
  </div>
</div>

<div class="p-2 rounded float-start">
<h5 class="card-title">Client</h5>
<img src={img4} class="rounded" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Looking for employees...Here you find employees in your profession</p>
    <a href="/loginc" class="btn btn-primary">Employee Search</a>
  </div>
</div>

<div class="p-2 rounded float-end">
<h5 class="card-title">Admin</h5>
    <img src={img3} class="img-thumbnail" alt="..."></img>
  <div class="card-body">
  <p class="card-title">System Administration</p>
    <a href="/loginadmin" class="btn btn-primary">Administration</a>
  </div><br/>
  </div>
  <div>
                <footer className = "footer">
                <p class="fixed-bottom text-muted">Created by rasheedsaquib@gmail.com</p>
                </footer>
            </div>
</div>
    )
}
export default Main;