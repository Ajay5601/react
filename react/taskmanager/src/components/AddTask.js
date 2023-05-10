import React,{useState} from "react";


const AddTask=(props)=>{
    const[value1,setvalue1]=useState("")
    const[value2,setvalue2]=useState("")
    const{savevalue}=props;
   
    return [<div>

        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" onChange={(e)=>{setvalue1(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Assignee</label>
                <input type="text" placeholder="add assignee" onChange={(e)=>{setvalue2(e.target.value)}} />
            </div>

            <input type="submit" className="btn btn-block" onClick={(e)=>savevalue(value1,value2,e)}/>
        </form>
    </div>]
}
export default AddTask;