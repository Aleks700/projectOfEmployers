import React, { Fragment, useState, useContext,useEffect } from 'react';
import UserContext from '../userContext/UserContext';
export default function Search({props}) {

    const userContext = useContext(UserContext);
    const {ChangeSearchValue,searchValue} = userContext;

    const [searchingValue, setSearchValue] = useState('');

 

    const startSearch = () =>{
        ChangeSearchValue(searchingValue);
        setSearchValue('');
    }



    // useEffect(()=>{
    //     ChangeSearchValue(searchingValue);
    // },[searchingValue])

    return (
        <Fragment>
            <input type="text" name="NAME" value={searchingValue} onChange={(e)=>setSearchValue(e.target.value)} class="form-control"></input>
            <button onClick={()=>startSearch()} > Найти</button>
        </Fragment>
    )
}
