import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom";
const UpdateItems = ()=>
{
    let history= useHistory();
    const {itemId}= useParams(); // capture id from url params

    const [item,setItems]= useState({
        itemName:"",
        cost:""
    });
    //destruction for user
    const {itemName,cost} = item;

    const onInputChange= e=>
    {
        //we are using spread operator 
        //using spread operator other fields will not show errors
        setItems({...item,[e.target.name]:e.target.value});
    }
    //for form submition
    const onSubmit= async (e)=>
    {
        e.preventDefault();
        console.log('put method called '+itemId)
        //call put method
    
    const result=await axios.put(`http://localhost:1222/api/items/viewItemByitemId/${itemId}` );
       
        //redirect to home page after storing
        console.log(result.data)
        history.push("/view");

    }
    useEffect(()=>
    {
        loadItem();
    },[])
    //to load one user or to display one user by id
    const loadItem = async (itemId)=>
    {
      
       const result=await axios.get(`http://localhost:1222/api/items/viewItemByitemId/${itemId}`);
        setItems(result.data);
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Update Item</h2>
                <form onSubmit={e=> onSubmit(e)}>
                    
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your ItemName"
                            name="itemName" 
                            value={itemName}
                            onChange={e=> onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                       <input type="Number"
                            className="form-control form-control-lg"
                            placeholder="Enter Cost"
                            name="cost" 
                            value={cost}
                            onChange={e=> onInputChange(e)}/>
                    </div>
                    <button className="btn btn-warning btn-block">Update Item</button>
                </form>
            </div>
        </div>

    )
}
export default UpdateItems;