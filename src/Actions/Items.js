import axios from '../axios/axios';

const _addItems = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const AddItem = (itemData = {
      
        itemName:"",
        cost:""
}) => {
    return (dispatch) => {
        const item = {
   
        itemName:itemData.itemName,
        cost:itemData.cost
        };

        return axios.post('items/create', item).then(result => {
            dispatch(_addItems(result.data));
        });
    };
};

const _removeItem= ({ itemId } = {}) => ({
    type: 'REMOVE_ITEM',
    itemId
});

export const RemoveItem = ({ itemId } = {}) => {
    return (dispatch) => {
        return axios.delete(`items/${itemId}`).then(() => {
            dispatch(_removeItem({ itemId }));
        })
    }
};

const _updateItem = (itemId, updates) => ({
    type: 'UPDATE_ITEM',
    itemId,
    updates
});

export const updateItems = (itemId, updates) => {
    return (dispatch) => {
        return axios.put(`items/${itemId}`, updates).then(() => {
            dispatch(_updateItem(itemId, updates));
        });
    };
};
cont _getItems=(items)=>({
    type:'Get_IITEMs',
    items
});
export const getItems=()=>{
    return (dispatch)=>{
        return axios.get('items').then(result=>{
            const items=[];
            result.data.forEach(item=>{
                items.push(item);
            });
            dispatch(_getItems(items));
        });
    };
    
};

