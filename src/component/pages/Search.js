import React,{admins,useState} from "react";

const Search=()=>{
  const[quary,setQuary]=useState("");

    const keys=["firstName","lastName"]
    console.log(admins[0]["firstName"])
    const search =(data)=>{

    return data.filter(
        (admin)=>
        keys.some((key)=>admin[key].tolowerCase().includes(quary))

    );
    };

    return(
        <div className="search">
            <input type="text" placeholder="Search..." 
            className="search" 
            onChange={e=> setQuary(e.target.value)}/>
                    <input data={search(admins)}/>

        </div>
    )
}
export default Search;

 {/*   const Search=express();
Search.use(cors());
Search.get("/homeA",(req,res)=>{
    res.data(admins)
});

Search.listen(3000,()=>console.log("API"));
<ul className="list">
                {Admins.filter(admin=>admin.firstName.tolowerCase().includes(quary)
                ).map((admin)=>(
                <li key={admin.id} className="listItems">{admin.firstName}</li>
                ))}
            </ul>
*/}