import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Users from './components/Users';
import Form from './components/Form';
import Search from './components/Search';
import UserState from './userContext/UserState';
import React,{useState} from 'react';
import View from './components/View';
import Chekbox from './components/Chekbox';

function App() {


  const [seart,setSeart] = useState('Alex');
  
  return (
    
    <UserState>
      <div class="container">
        <row>
          <Form ></Form>
        </row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Поиск</h1>
        {/* <Search></Search> */}
        {/* <Chekbox></Chekbox> */}
        <View></View>
        {/* <Users toSearch={seart}></Users> */}
      </div>
    </UserState>

  );
}

export default App;
