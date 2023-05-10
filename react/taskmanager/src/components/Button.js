import React,{useState} from "react";
const Button=(props)=>


{  
    const{close,addition,add}=props
    
    return[<div>
        <button className="btn"onClick={()=>add(!addition )}>{close}</button>
    </div>]
}
export default Button;