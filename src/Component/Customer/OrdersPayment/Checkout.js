import React from 'react'
// import gif1 from '../../images/gif1.mp4'
import gif2 from '../../../Images/Restaurant/gif2.mp4'
export default class Checkout extends React.Component{
render(){
    return (
        <div>
<center>
<video>
  <source src={gif2} type="video/mp4"/>
 
</video>


 <h1><b>Order Successful...</b></h1>
 </center>
 </div>

    );
}
}