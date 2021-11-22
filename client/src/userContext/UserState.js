import { RELOAD, SEARCH_USER, SET_RENDER,CHANGESEARCH,GET_USER } from './types';
import userReducer from './userReducer';
import UserContext from './UserContext';
import React, { useReducer,useState} from 'react';

const UserState = (props) => {
    const initialState = {
        reload: false,
        userProfile:[]
    };

    const [toggler,setToggler] = useState(true);
    const ChangeToggler = () => {
        setToggler(!toggler)
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

    const GetUser =  async (Id) =>{
        const data = await fetch(`http://localhost:8000/user/?Id=${Id}`);
        GET_USER();
    }

    const ChangeSearchValue = (value) =>{
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
        toggler:toggler,
        searchValue: searchValue,
        reload: reload,
        ChangeSearchValue,
        Reloaded,
        ChangeToggler
    }}>
        {props.children}
    </UserContext.Provider>
}

export default UserState;