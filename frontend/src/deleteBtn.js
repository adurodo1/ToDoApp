import React from "react"


 const DelBtn=(props)=>
{
return(
    <a    onClick={(e)=>props.delete(e,props.i_d)}>delete</a>
);

}

export default DelBtn;

//////////////