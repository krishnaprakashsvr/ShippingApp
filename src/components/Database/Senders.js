import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Shipment from '../Shipment/Shipment';
import {Link} from 'react-router-dom';

class Senders extends Component {
    constructor(props){
        super(props);
        this.state={senders:[],isDirect:false}
    }
    componentDidMount(){
        this.refreshlist();
        this.setState({isDirect: this.props.onChoose==null});
    }
    refreshlist(){
                this.setState({senders:[
                    {"SenderID":1,"SenderName":"FedEx",
                        'SenderCompany':'Test Company', 'SenderContry':'Belgium',
                        'SenderAddress':'Address1, Belgium,1002'},
                    {"SenderID":2,"SenderName":"TNT",
                        'SenderCompany':'TNT inc.', 'SenderContry':'U.S.A',
                        'SenderAddress':'Ohio, USA,45622'}]});
                }
    // createShipment=()=>{
    //     alert('sfd');
    //     //return <Redirect to='/Shipment' />
    //     return  <Route path='../Shipment/Shipment' component={Shipment} exact/>
    // }
    render() {
      //const lstSenders = this.props.lstSenders;
        
        
return (  

   
    <div> 
    <Table striped boarder hover size="sm">
        <thead>
            <tr>
                <th>Sender ID</th>
                <th>Sender Name</th>
                <th>Company</th>
                <th>Country</th>
                <th>Address</th>
                <th>Select</th>
            </tr>
        </thead>
          <tbody>
            {this.state.senders.map(sender=>
               <tr key={sender.SenderID}>
                   <td>{sender.SenderID}</td>
                   <td>{sender.SenderName}</td>
                   <td>{sender.SenderCompany}</td>
                   <td>{sender.SenderContry}</td>
                   <td>{sender.SenderAddress}</td>
                   <td hidden={this.state.isDirect}>
                       <button 
                       onClick={()=>this.props.onChoose(sender)}>Select</button>
                   </td>
                   <td hidden={!this.state.isDirect}>
                   {/* <NavLink to="/Shipment" >Sipment</NavLink> */}
                   <Link to={{pathname:'/Shipment',selectedSender:sender}}>
                       Create Shipment
                   </Link>
                    </td>
                   {/* <td hidden={!this.state.isDirect}>
                       <button 
                       onClick={this.createShipment}>Create Shipment</button>

                   </td> */}
               </tr>
               )}
            </tbody>
    </Table>
 </div>
    


      );  }}
  
  
  export default Senders;