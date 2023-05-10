import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';

function App() {
  const[change,setchange]=useState(true)
  const [sample, setSample] = useState([])

  const var1=localStorage.getItem("no1")
  useEffect(() => {
    setSample(JSON.parse(var1))
  }, [var1])

  const save=(a,b,e)=>{
    e.preventDefault()
   
    const result = {"id": Math.random(1),"name":a,"roll":b}
    // const ad =[result]
    // localStorage.setItem("no1",JSON.stringify(ad))
    if(var1===null){
      const ad =[result]
      localStorage.setItem("no1",JSON.stringify(ad))
     
    }
    else{
      const sample = JSON.parse(var1)
      sample.push(result)
      localStorage.setItem("no1",JSON.stringify(sample))
    }

  
  
    // localStorage.setItem("no1",JSON.stringify(ad))
  }
  return (<div className='container'>
  <div>
  <Header first={change} second={setchange}/>
  {change? <AddTask savevalue={save}/>: <TaskList varval={sample}/>}
   
    </div>
    </div>
   
  );
}

export default App;
