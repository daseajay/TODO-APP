import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDeleteSweep } from "react-icons/md";
const Todolist = () => {


     const [todoval,setTodoval] = useState("")

        const [todo,setTodo] = useState([]);

      let nexId = 3;
        const addtodo = () =>{
            if(todoval===""){
                alert("add todo")
            }else{
             const newtodo = [
                ...todo,
                {
                  id: nexId++,
                  task:todoval
                }
              ]
              setTodo(newtodo)
              setTodoval("")
            }
        }

        const deletodo = (id) =>{
         let updata = todo.filter((ele)=>{
                return ele.id!=id
          }
        )
          updata(setTodo)
      }

  return (
    <div className="container mt-5 w-50">
        <h3 className="text-center">TODO-APP</h3>
      <div className="d-flex">
        <input type="text" className="form-control" value={todoval} onChange={(e)=>{
          let task = e.target.value
          setTodoval(task)
        }} />
        <button className="btn btn-primary" onClick={()=>addtodo()}>Add</button>
      </div>
      <ul className="list-group mt-4">
         {
          todo.map((item)=>{
              return (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <p>{item.task}</p>
                <button className="btn btn-danger" onClick={()=>deletodo(item.id)}><MdDeleteSweep/></button>
               </li>
              )
          })
         }
      </ul>
    </div>
  );
};

export default Todolist;


 