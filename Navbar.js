import React,{useState} from "react";
import './Navbar.css'



export default function Navbar()
{
    let init=11;
const [mysum,name] = useState(init);

    return(
        <>
        

        <h1>{mysum}</h1>
    <button onClick={()=> name(mysum+2)}>plaus</button>
    <button onClick={()=>name(mysum-2)}>mines</button>
    <button onClick={()=>name(mysum/2)}>division</button>
    <button onClick={()=>name(mysum*2)}>multiplications</button>
            
        
        
            
        </>
    );
}
