 
import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import DelBtn from'./deleteBtn';
import CompBtn from './completedBtn';

function App() {

   const[data, setData]=useState([]);
   const[completedStatus, setcompletedStatus]=useState("a");
  
  function createTodo(e){

    e.preventDefault();
    
  // setData( data.push(activity));
  setData(data);// to fix error with completed select drop down
  
  setData(prevItems => [...prevItems, 
    {
      id:prevItems.length,
      value:activity,
      status:"uncompleted"
    }
  ])
 
  }


 // finalise completed function

 function viewByCompleteStatus(e){

  var choice=e.target.value
  const copyData=data;
  setData(data)
  if(choice==='n')
  
  {
   setData(copyData.filter(data => data.status !== "completed"));

  }
     else if(choice==='y'){
       setData(copyData.filter(data => data.status == "completed"));
     }

 }

 function completed(e,key){
e.preventDefault();
const id = key;
var item=data[id]

item.status="completed";
console.log(item);

// data.forEach((data)=>{
//   if(data.id==id)
//   {
//     //e.target.classList.add("linethrough");
//     data.status="completed";
//     console.log(data);
//   }

// })

 }


  function deleteActivity(e,key){
    e.preventDefault();

     
    const id = key;
    console.log(key)
    var child=e.target;
    var firstChild=child.parentNode.parentNode.firstChild;
    firstChild.classList.add("linethrough");

    
    // setData(data.filter(data => data.id !== id));

    //setData( );

    // data.forEach((data)=>{
    //   if(data.id==id)
    //   {
    //     //e.target.classList.add("linethrough");
    //     var child=e.target;
    //     var firstChild=child.parentNode.parentNode.firstChild;
    //     firstChild.classList.add("linethrough");
    //   }

    // })

   
        //e.target.classList.add("linethrough");
      
 
  }
 
 

  const [activity, setActivity] = useState("");
  return (
    <>

    
<header>
        <h1>To Do App</h1>
</header>

    <input type="text" name="action" id="input" value={activity}  onChange={(e) => setActivity(e.target.value)}/>
    <button onClick={createTodo}>Add</button>
    <select onClick={(e)=>viewByCompleteStatus(e)}>
    <option value="a" selected>All</option>
      <option value="y">Completed</option>
      <option value="n">Not completed</option>
     
    
    </select>

    <table className="table table-dark table-striped">
        <thead>
            <tr>
                <th>To do</th>

            </tr>
        </thead>
        <tbody>
        <Todo/>
    {data.length===0? null :  

data.map((data)=>
(
 <tr key={data.id}><td>{data.value}</td><td><CompBtn i_d={data.id} complete={completed}/></td><td><DelBtn i_d={data.id} delete={deleteActivity}/></td></tr>
 
))
      
   
} 
</tbody>

</table>


<footer>

</footer>
   
   </>
  );
}

export default App;
