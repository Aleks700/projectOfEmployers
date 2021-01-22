import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Users from './components/Users';
import Form from './components/Form';
import Search from './components/Search';
import UserState from './userContext/UserState';
import React,{Fragment, useState} from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import View from './components/View';
import Chekbox from './components/Chekbox';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';

function App() {


  const [seart,setSeart] = useState('Alex');
  
  return (
    <Router>
      <Navbar></Navbar>
    <UserState>
      <div class="container">
        <Route path="/"  exact render={props=>( <View></View> )}></Route>
        <Route path="/form"  exact render={props=>(<Fragment><Form ></Form><View></View></Fragment> )}></Route>
        <Route path="/users/:id"  exact render={props =>( <Fragment><EditUser id={props.match.params.id}></EditUser> </Fragment>  )}></Route>
        
        {/* <Search></Search> */}
        {/* <Chekbox></Chekbox> */}
        
        {/* <Users toSearch={seart}></Users> */}
      </div>
    </UserState>
    </Router>
  );
}

export default App;
