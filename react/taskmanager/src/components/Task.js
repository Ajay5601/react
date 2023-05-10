import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

function Task(props) {
    const { varval1 } = props
    // const val1 = JSON.parse(varval1)


    const func = (a) => {
         const val2 = varval1.filter((x)=>x.id !==a)
         localStorage.setItem("no1",JSON.stringify(val2))
    }

    return (<div>
        {varval1.map((x) => {
            return <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold">Task Name:</span> {x.name}
                    </p>
                    <p className="taskDate"><span className="textBold">Assignee</span>{x.roll} </p>
                </div>
                <div>
                    <button><FaTimes className="delIcon"
                        onClick={() => func(x.id)} /></button>
                    <p><FaPencilAlt className="editIcon" /></p>
                </div>
            </div>
        })}

    </div>)
}
export default Task;