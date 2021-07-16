import { connect } from "formik";

const Item=({itemId,itemName,cost})=>(

    <div>
        <Link to={`/item/${itemId}`}>
            <h4>{itemName} ({cost})</h4>
        </Link>
        <button onClick={()=>{
            dispatchEvent(removeItem({itemId}));
        }}>Remove</button>
    </div>
);
export default connect()(Item);
