import { RELOAD, SEARCH_USER, SET_RENDER,CHANGESEARCH } from './types';
import userReducer from './userReducer';
import UserContext from './UserContext';
import React, { useReducer } from 'react';

const UserState = (props) => {
    const initialState = {
        reload: false,
        searchValue: 'Bitchis'
    }

    const [state, dispatch] = useReducer(userReducer, initialState);
    const {searchValue,reload} = state;

    const Reloaded = ()=>{
        const newReload = !state.reload;
        dispatch({
            type: RELOAD,
            payload: newReload
        });
    };
    const ChangeSearchValue = (value)=>{
        // state.

        console.log("Изменилось значение");
        console.log(state.searchValue);
        console.log("value");
        console.log(value);
        console.log("value");
        dispatch({
            type: CHANGESEARCH,
            payload: value
        });
        console.log(state.searchValue);
    };

    return <UserContext.Provider value={{
        // reload: state.reload,
        searchValue: searchValue,
        reload: reload,
        ChangeSearchValue,
        Reloaded
        
    }}>
        {props.children}
    </UserContext.Provider>
}

export default UserState;