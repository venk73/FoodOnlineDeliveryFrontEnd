
import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'

const ViewItem=()=>
{
    //useState with blank array
    const [item,setItems]= useState([]);
    
    //to perform some action on a page
    //we will call loadUser on page load 
    useEffect(()=>
    {
       loadItem();

    },[]);
    const loadItem= async ()=>
    {
        //await will wait untill the request is not completed
        const result=await axios.get(`http://localhost:1222/api/items/findAllItems`);
        //Axios is a HttpClient --> get,put,delete,post all return Promise
       //set the data to Home page
       console.log(result.data)
       setItems(result.data);
    }


 //delete user method
 const RemoveItem = async (itemId) =>
 {
     await axios.delete(`http://localhost:1222/api/items/deleteItems/${itemId}`);
     //call load Users
     loadItem();
 }



    console.log('render ',item)
    return(

        <div className="container">
        <div className="py-4">
            
<table className="table border shadow">
<thead class="thead-dark">
<tr>
  <th scope="col">#</th>
  <th scope="col">itemId</th>
  <th scope="col">itemName</th>
  <th scope="col">cost</th>
<th scope="col">action</th>
  
</tr>
</thead>
<tbody>
{
item.map((item,index)=>(

<tr>
<th scope="row">{index+1}</th>
<td>{item.itemId}</td>
<td>{item.itemName}</td>
<td>{item.cost}</td>
<td>
<Link class="btn btn-primary mr-2" to={`/add/${item}`}>Add</Link>
  {/* <Link class="btn btn-outline-primary mr-2"  to={`/Edit/${item.itemId}`}>Edit</Link> */}
  <Link class="btn btn-danger mr-2" onClick={()=> RemoveItem(item.itemId)}>Delete</Link>
</td>
</tr>
)
) // map closed
}
</tbody>
</table>
</div>
</div>




    )



}
    


export default ViewItem;