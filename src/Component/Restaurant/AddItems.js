import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from "react-router-dom";

const AddItems = ()=>
{
    let history= useHistory();
    const [item,setItems]= useState({
        itemId:"",
        itemName:"",
        cost:""
        
    });
    //destruction for user
    const {itemId,itemName,cost} = item;

    const onInputChange= (e)=>
    {
        //we are using spread operator 
        //using spread operator other fields will not show errors
        setItems({...item,[e.target.name]:e.target.value}); 
    }
    //for form submition
    const onSubmit= async (e)=>
    {
        e.preventDefault();
        //call post method
        await axios.post("http://localhost:1222/api/items/addItems",item);
        //redirect to home page after storing
        history.push("/");

    }
    return (
        
        <div className="container">
            <h1>Add Item components</h1>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Item</h2>
                <form onSubmit={e=> onSubmit(e)}>
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your ItemId"
                            name="itemId"
                            value={itemId}
                            onChange={(e)=> onInputChange(e)} />
                    </div>
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your ItemName"
                            name="itemName" 
                            value={itemName}
                            onChange={e=> onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                       <input type="number"
                            className="form-control form-control-lg"
                            placeholder="Cost"
                            name="cost" 
                            value={cost}
                            onChange={e=> onInputChange(e)}/>
                    </div>
                    
                    <button className="btn btn-primary btn-block">Add Items</button>
                </form>
            </div>
        </div>

    )
}
export default AddItems;