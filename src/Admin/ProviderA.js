import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ProviderA =()=> {

    const [providers,setProviders]=useState([]);

    useEffect(()=>{
        loadProvider();
    },[]);

    const loadProvider= async()=>{
        const result=await axios.get("http://localhost:8080/prov/providers");
        setProviders(result.data)
    };

    const deleteProvider = async id => {
        await axios.delete(`http://localhost:8080/prov/providers/${id}`);
        loadProvider();  
    };

    return(
            <div>
                <h1 align="center">List of providers</h1>
                <div className='container'>
                <table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">Providers</th>
      <th scope="col">Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Contact No</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {providers.map((provider,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{provider.providerName}</td>
            <td>{provider.providerEmail}</td>
            <td>{provider.providerNumber}</td>
            
            <td>
            <a class="btn btn-outline-primary p-2" aria-current="page" href={`/profilep/${provider.id}`}>View</a>{' '} 
                <a class="btn bg-primary" aria-current="page" href={`/update/userp/${provider.id}`}>Update</a>{' '} 
                <a class="btn bg-danger" aria-current="page" onClick={()=>deleteProvider(provider.id)} href='loginadmin'>Delete</a>
              
            </td>
        </tr>
    ))}
  </tbody>
</table>
</div>
<a className="btn btn-primary" href="/homeA">Go Back</a>

            </div>
        )
        
    }
 
 export default ProviderA;