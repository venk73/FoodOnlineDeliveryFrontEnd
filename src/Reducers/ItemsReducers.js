const itemsReducerDefaultState = [];

const ItemsReducers=(state = itemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ];
        case 'REMOVE_ITEM':
            return state.filter(({ itemId }) => itemId !== action.itemId);
        case 'UPDATE_ITEM':
            return state.map((item) => {
                if (item.itemId === action.itemId) {
                    return {
                        ...item,
                        ...action.updates
                    };
                } else {
                    return item;
                }
            });
        case 'GET_ITEMS':
            return action.items;
        default:
            return state;
    }
};
export  {ItemsReducers};