import React, { Fragment, useState  } from 'react';

export default function Chekbox() {
    const [Chek,setChek] = useState({
        SKTB: false,
        DZZ: false,
        SVSN: false,
        SBIK: false
    });



    const ChangeChek = (event)=>{
        const name = event.target.name;
        const ChekValues = event.target.values;
        const newValue = {...Chek, name: ChekValues}
        setChek(newValue);
    };
    return (
        <div>
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={Chek.SKTB} onChange={(e)=>{ChangeChek(e)}} name="СКТБ"></input>
        <label class="form-check-label" for="inlineCheckbox1">СКТБ</label>
        <br></br>
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={Chek.DZZ}></input>
        <label class="form-check-label" for="inlineCheckbox1">ДЗЗ</label>
        <br></br>
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={Chek.SVSN}></input>
        <label class="form-check-label" for="inlineCheckbox1">СВСН</label>
        <br></br>
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={Chek.SBIK}></input>
        <label class="form-check-label" for="inlineCheckbox1">СБИК</label>
        </div>
    )
}
