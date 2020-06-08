import React,{Component} from 'react';
import {Header} from './components/NavAndHeader/Header.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/NavAndHeader/Navigation';
import Shipment from './components/Shipment/Shipment';
import './App.css';
import Senders from './components/Database/Senders';
import Employee from './components/Database/Employee';
import Sender from './components/Database/sender';

class App extends Component {
 constructor(){
   super();
   this.state={senders:[]}
 }
  render() {
    return (  
      <div> 
      <Header customStyle='Header' name='Global Shipping Manager'/>
      <BrowserRouter>
       <Navigation/>
       <Switch>
         <Route path='/Shipment' component={Shipment} exact/>
         <Route path='/Senders' component={Senders} />
         <Route path='/Employee' component={Employee} />
         <Route path='/sender' component={Sender} />
       </Switch>
       </BrowserRouter>
     </div>
    );}
  }


export default App;
