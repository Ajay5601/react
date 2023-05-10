import React,{useState}from "react";
import Task from "./Task";

const TaskList=(props)=>{
const{varval}=props
return[<div><Task varval1={varval}/>
    </div>]
} 
export default TaskList;