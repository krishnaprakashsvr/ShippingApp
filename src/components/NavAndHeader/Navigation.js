import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './Navigation.css'


class Navigation extends Component {
 
render() {
    return (    
        <Navbar className='Navigation' >
            <Nav >
                <NavLink   
                    to="/Shipment" className='Navigation'
                    activeStyle={{ color:'orange' }}> Shipment</NavLink>
                <NavLink   className='Navigation'
                    to="/Senders" activeStyle={{ color:'orange' }}> Senders list</NavLink>
                <NavLink   className='Navigation'
                    to="/Recipients" activeStyle={{ color:'orange' }}> Recipient list</NavLink>
                <NavLink   className='Navigation'
                    to="/Employee"   activeStyle={{ color:'orange' }}> Employee</NavLink>
                    <NavLink   className='Navigation'
                    to="/sender"   activeStyle={{ color:'orange' }}> Sender</NavLink>
            </Nav>
        </Navbar>
 );  }}
  
  
  export default Navigation;