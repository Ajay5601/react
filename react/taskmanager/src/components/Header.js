import React,{useState} from "react";
import Button from "./Button";
const Header=(props)=>{
  const{first,second}=props
  
return [<div>
    <header className="header">
            <h2 className="app-header">Task Manager App</h2>
            <Button  close={first?"close":"Add"} addition={first} add={second}/>
        </header>
</div>]
}
export default Header;