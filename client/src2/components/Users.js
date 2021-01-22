import React, { useState, useEffect, useContext } from 'react';
import Use from './Use';
import Spinner from './Spinner';
import UserContext from '../userContext/UserContext';
import { text } from 'body-parser';

export default function Users({toSearch,DZZ,SVSN,SBIK,SKTB,FirstFloor,SecondFloor,ThirdFloor,FourFloor,FiveFloor}) {

    const userContext = useContext(UserContext);
    const {reload,searchValue} = userContext;
    const [DataList, setDataList] = useState();
    const [loading, setLoading] = useState(true);
    const [dbLoading, setdbLoading] = useState(true);
    
   

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await fetch('http://localhost:8000/api');
            
            const json = await data.json();
            console.log('were data');
            console.log(json);
            console.log('were data');
            // const searchValue = '';
            console.log('Right now woll');

            

            const filtedData = json.filter(
                (index)=>{
                    if(index.NAME.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.DEPARTMENT.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.DESCTOP.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.IP.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.MONITOR.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.POSITION.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.СABINET.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.ENTER_POINT.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                    if(index.NAME.toLowerCase().indexOf(toSearch.toLowerCase())!==-1){
                        return( index);
                    }
                }
            );

            let DepartedFilter = filtedData;
                if(DZZ===true||SVSN===true||SKTB===true||SBIK===true){
                    DepartedFilter = DepartedFilter.filter(index=>{
                        if(DZZ===true&&index.DEPARTMENT==="DZZ"){return index}                    
                        if(SVSN===true&&index.DEPARTMENT==="SVSN"){return index}
                        if(SKTB===true&&index.DEPARTMENT==="SKTB"){return index}
                        if(SBIK===true&&index.DEPARTMENT==="SBIK"){return index}
                    });

                };
                if(FirstFloor===true||SecondFloor===true||ThirdFloor===true||FourFloor===true||FiveFloor===true){
                    DepartedFilter = DepartedFilter.filter(index=>{
                        if(FirstFloor===true&&index.FLOOR==="1"){return index}                    
                        if(SecondFloor===true&&index.FLOOR==="2"){return index}
                        if(ThirdFloor===true&&index.FLOOR==="3"){return index}
                        if(FourFloor===true&&index.FLOOR==="4"){return index}
                        if(FiveFloor===true&&index.FLOOR==="5"){return index}
                    });

                };
                
            // let DepartedFilter = filtedData;
            //     if(DZZ===true||SVSN===true||SKTB===true||SBIK===true){
            //         DepartedFilter = DepartedFilter.filter(index=>{
            //             if(DZZ===true&&index.DEPARTMENT==="DZZ"){return index}                    
            //             if(SVSN===true&&index.DEPARTMENT==="SVSN"){return index}
            //             if(SKTB===true&&index.DEPARTMENT==="SKTB"){return index}
            //             if(SBIK===true&&index.DEPARTMENT==="SBIK"){return index}
            //         });
            //     }





            // if(DZZ===true){
            //     DepartedFilter = DepartedFilter.filter(
            //         (index)=>{
            //             if(index.DEPARTMENT==='DZZ'){ return index}
            //         });
            //  };
            // if(SVSN===true){
            //     DepartedFilter = DepartedFilter.filter(
            //         (index)=>{
            //             if(index.DEPARTMENT==='SVSN'){ return index}
            //         });
            //  };
            // if(SKTB===true){
            //     DepartedFilter = DepartedFilter.filter(
            //         (index)=>{
            //             if(index.DEPARTMENT==='SKTB'){ return index}
            //         });
            //  };
            // if(DZZ===true){
            //     DepartedFilter = DepartedFilter.filter(
            //         (index)=>{
            //             if(index.DEPARTMENT==='DZZ'){ return index}
            //         });
            //  };

            console.log(filtedData);
     
            console.log('filtered datas');
            console.log(filtedData);
            console.log('filtered datas');

            // setDataList(filtedData);
            setDataList(DepartedFilter);
            setLoading(false);          
        };

       
        fetchData();
    }, [dbLoading,reload,toSearch,DZZ,SVSN,SBIK,SKTB,FirstFloor,SecondFloor,ThirdFloor,FourFloor,FiveFloor]);



    

    if (loading) {
        return <Spinner></Spinner>
    } else {
        if(DataList.length===0){
            return <h1 style={{ textAlign:'center '}}>Данные значения отсутствуют</h1>
        }
        else{
            return (
                <div>
                    <table class="table ">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Должность</th>
                                <th scope="col">Кабинет</th>
                                <th scope="col">Этаж</th>
                                <th scope="col">IP</th>
                                <th scope="col">Отдел</th>
                                <th scope="col">Точка</th>
                                <th scope="col">Системный блок</th>
                                <th scope="col">Монитор</th>
                                <th scope="col">Принтер</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DataList.map(index => {
                                    return <Use
                                        data={index}
                                    ></Use>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
       
    }


}
