import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ContantA =()=> {
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
                <h1 align="center">List of clients</h1>
                <div className='container'>

 <table class="table">
  <thead>
    <tr className='bg-secondary text-white'>
      <th scope="col">Clients</th>
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
                <a class="btn bg-danger" aria-current="page" onClick={()=>deleteClient(client.id) } href="/loginadmin">Delete</a>
               
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
 
 export default ContantA;