import React from "react"


 const CompBtn=(props)=>
{
return(
   
    <button onClick={(e)=>props.complete(e,props.i_d)}>completed</button>
);

}

export default CompBtn;