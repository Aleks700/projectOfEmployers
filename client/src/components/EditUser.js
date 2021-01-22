import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import Spinner from './Spinner';

export default function EditUser(props) {


    const [loading, setLoading] = useState(false);
    const [changed, setChanged] = useState(false);
    const [userData, setUserData] = useState({
        DEPARTMENT: "",
        DESCTOP: "",
        ENTER_POINT: "",
        FLOOR: "",
        IP: "",
        Id: '',
        MONITOR: "",
        NAME: "",
        POSITION: "",
        PRINTER: "",
        СABINET: ""
    });
    const getUser = async (id) => {
        setLoading(true);
        const data = await fetch(`http://10.0.15.226:8000/user/?Id=${id}`);
        const json = await data.json();
        console.log(json[0]);
        await setUserData(json[0]);
    };
    useEffect(() => {
        const data = getUser(props.id);
        console.log(userData);
        console.log(data.NAME);
        setLoading(false);
        // setUserName(userData.NAME);
    }, [changed]);



    const PutUser = async (e) =>{
        e.preventDefault();
        console.log(userData);
        const requestOptions = {
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        };
        await fetch('http://10.0.15.226:8000/api/edit', requestOptions);
        setChanged(true);
    };

    if(changed){
        return (<Redirect to='/'></Redirect> );
    };

    if (loading) {
        return (<Spinner></Spinner>)
    }
    else {
        return (
            <div className='EditForm'>
                <h1>Редактирование данных</h1>
                <form>




                <div class="form-group">
                <label><p>Имя</p></label>
                <input onChange={(e) => { setUserData({...userData,NAME:e.target.value}) }} value={userData.NAME} name="NAME" className="form-control"></input>
                </div>


                <div class="form-group">
                <label><p>Должность</p></label>
                <input onChange={(e) => { setUserData({...userData,POSITION:e.target.value}) }} value={userData.POSITION} name="POSITION" className="form-control"></input>
                </div>


                <div class="form-group">
                <label><p>Кабинет</p></label>
                <input onChange={(e) => { setUserData({...userData,СABINET:e.target.value}) }} value={userData.СABINET} name="СABINET" className="form-control"></input>
                </div>



                <div class="form-group">
                <label><p>IP</p></label>
                <input onChange={(e) => { setUserData({...userData,IP:e.target.value}) }} value={userData.IP} name="IP" className="form-control"></input>
                </div>



                <div class="form-group">
                <label><p>Точка </p></label>
                <input onChange={(e) => { setUserData({...userData,ENTER_POINT:e.target.value}) }} value={userData.ENTER_POINT} name="ENTER_POINT" className="form-control"></input>
                </div>
               

                <div class="form-group">
                <label><p>Системный блок</p></label>
                <input onChange={(e) => { setUserData({...userData,DESCTOP:e.target.value}) }} value={userData.DESCTOP} name="DESCTOP" className="form-control"></input>
                </div>
               
                <div class="form-group">
                <label><p>Монитор</p></label>
                <input onChange={(e) => { setUserData({...userData,MONITOR:e.target.value}) }} value={userData.MONITOR} name="MONITOR" className="form-control"></input>
                </div>
               
                <div class="form-group">
                <label><p>Принтер</p></label>
                <input onChange={(e) => { setUserData({...userData,PRINTER:e.target.value}) }} value={userData.PRINTER} name="PRINTER" className="form-control"></input>
                </div>
               
                 <div class="form-group">
                        <label><p>Здание</p></label>
                        <select class="form-control" id="exampleFormControlSelect1" value={userData.DEPARTMENT}  onChange={(e) => { setUserData({...userData,DEPARTMENT:e.target.value}) }} >
                            <option value='SKTB' selected  >СКТБ</option>
                            <option value='DZZ'  >ДЗЗ</option>
                            <option value='SVSN' >СВСН</option>
                            <option value='SBIK' >СБИК</option>
                        </select>
                    </div>
                <button className='btn btn-primary' onClick={(e)=>{PutUser(e)}}>Редактировать</button>
                </form>
            </div>
        )
    }


}
