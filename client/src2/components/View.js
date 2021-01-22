import React,{useState} from 'react'
import Users from './Users';
export default function View() {


    const [searchingValue, setSearchingValue] = useState('');
    const [SKTB, setSKTB] = useState(false);
    const [DZZ, setDZZ] = useState(false);
    const [SVSN, setSVSN] = useState(false);
    const [SBIK, setSBIK] = useState(false);
    const [FirstFloor, setFirstFloor] = useState(false);
    const [SecondFloor, setSecondFloor] = useState(false);
    const [ThirdFloor, setThirdFloor] = useState(false);
    const [FourFloor, setFourFloor] = useState(false);
    const [FiveFloor, setFiveFloor] = useState(false);
    return (
        <div>
            <input type="text" name="NAME" value={searchingValue} onChange={(e)=>setSearchingValue(e.target.value)} class="form-control"></input>
            
            <div  className="departmentFilter">
            <h1>Отдел</h1>
               
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={SKTB} onChange={()=>{setSKTB(!SKTB)}} name="SKTB"></input>
                <label class="form-check-label" for="inlineCheckbox1">СКТБ</label>
                <br></br>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={DZZ} onChange={()=>{setDZZ(!DZZ)}} name="DZZ"></input>
                <label class="form-check-label" for="inlineCheckbox1">ДЗЗ</label>
                <br></br>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={SVSN}  onChange={()=>{setSVSN(!SVSN)}} name="SVSN"></input>
                <label class="form-check-label" for="inlineCheckbox1">СВСН</label>
                <br></br>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={SBIK} name="SBIK" onChange={()=>{setSBIK(!SBIK)}} name="SBIK"></input>
                <label class="form-check-label" for="inlineCheckbox1">СБИК</label>
            </div>
            <h1>Этаж</h1>
            <div > 
                
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={FirstFloor} onChange={()=>{setFirstFloor(!FirstFloor)}} name="SKTB"></input>
                <label class="form-check-label" for="inlineCheckbox1">1 этаж</label>
                <br></br>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={SecondFloor} onChange={()=>{setSecondFloor(!SecondFloor)}} name="DZZ"></input>
                <label class="form-check-label" for="inlineCheckbox1">2 этаж</label>
                <br></br>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={ThirdFloor}  onChange={()=>{setThirdFloor(!ThirdFloor)}} name="SVSN"></input>
                <label class="form-check-label" for="inlineCheckbox1">3 этаж</label>
                <br></br>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={FourFloor} name="SBIK" onChange={()=>{setFourFloor(!FourFloor)}} name="SBIK"></input>
                <label class="form-check-label" for="inlineCheckbox1">4 этаж</label>
                <br></br> 
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={FiveFloor} name="SBIK" onChange={()=>{setFiveFloor(!FiveFloor)}} name="SBIK"></input>
                <label class="form-check-label" for="inlineCheckbox1">5 этаж</label>
            </div>
            <Users toSearch={searchingValue} DZZ={DZZ} SVSN={SVSN} SBIK={SBIK} SKTB={SKTB} FirstFloor={FirstFloor} SecondFloor={SecondFloor} ThirdFloor={ThirdFloor} FourFloor={FourFloor} FiveFloor={FiveFloor}></Users>
        </div>
    )
}
