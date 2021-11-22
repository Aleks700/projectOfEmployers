import React,{useContext} from 'react';
import {Link} from 'react-router-dom'; 
import Delete from '../img/Delete.png';
import UserContext from  '../userContext/UserContext';
export default function Use(props) {
    const userContext = useContext(UserContext);
    const DeleteEmployers =   async (Id) =>{
        let confirmDelete =  window.confirm(`Вы точно хотите удалить из базы сотрудника ${props.data.NAME}`);
        if(confirmDelete){
            console.log('Start deleting');
            const deleteBody = {
                Id: Id
            };
            const requestBody = {
                method: "DELETE",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(deleteBody)
            };
            console.log('щяс начнется');
            await fetch('http://10.0.15.226:8000/api', requestBody);
            console.log('щяс начнется снова');
            userContext.ChangeToggler();
            console.log('Удалено и релоад');
            // userContext.ChangeToggler();
            // userContext.Reloaded();
            console.log('Релоад');
        }
        else{
            console.log('хорошо что передумал');
        }
        
       
    }


    return (
        <tr id={props.data.Id}>
            <td scope="row">{props.data.NAME}</td>
            <td >{props.data.POSITION}</td>
            <td>{props.data.СABINET}</td>
            <td>{props.data.FLOOR}</td>
            <td>{props.data.IP}</td>
            <td>{props.data.DEPARTMENT}</td>
            <td>{props.data.ENTER_POINT}</td>
            <td>{props.data.DESCTOP}</td>
            <td>{props.data.MONITOR}</td>
            <td>{props.data.PRINTER}</td>
            <td><div className="btn-box"><button className='btn btn-danger'  onClick={()=>{DeleteEmployers(props.data.Id)}}>Удалить</button>
            <Link to={`/users/${props.data.Id}`}><button className='btn btn-primary' onClick={()=>{}}>Редактировать</button ></Link></div></td>
        </tr>
    )
}
