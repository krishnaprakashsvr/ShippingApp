import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Shipment from '../Shipment/Shipment';
import {Link} from 'react-router-dom';

class Recipients extends Component {
    constructor(props){
        super(props);
        this.state={recipients:[],isDirect:false}
    }
    componentDidMount(){
        this.refreshlist();
        this.setState({isDirect: this.props.onchoose==null});
    }
    refreshlist(){
                this.setState({recipients:[
                    {"RecipientID":1,"RecipientName":"R_FedEx",
                        'RecipientCompany':'Test Company', 'RecipientContry':'BE',
                        'RecipientAddress':'Address1, Belgium,1002'},
                    {"RecipientID":2,"RecipientName":"R_TNT",
                        'RecipientCompany':'TNT inc.', 'RecipientContry':'U.S.A',
                        'RecipientAddress':'Ohio, USA,45622'},
                        {"RecipientID":3,"RecipientName":"R_BEID",
                        'RecipientCompany':'Belgium inc.', 'RecipientContry':'BE',
                        'RecipientAddress':'Brussels, 1000'},

                        {"RecipientID":4,"RecipientName":"R_FRID",
                        'RecipientCompany':'France inc.', 'RecipientContry':'FR',
                        'RecipientAddress':'France, 2000'},
                        {"RecipientID":5,"RecipientName":"R_GE",
                        'RecipientCompany':'Germany inc.', 'RecipientContry':'GE',
                        'RecipientAddress':'Germany, 5000'},
                        {"RecipientID":6,"RecipientName":"R_GB",
                        'RecipientCompany':'London inc.', 'RecipientContry':'GB',
                        'RecipientAddress':'London, W1F'}
                    ]});
                }
    createShipment=(recip)=>{
       const qString = 'id='+recip.RecipientID+
                        '&name='+recip.RecipientName+
                        '&comp='+recip.RecipientCompany+
                        '&cnty='+recip.RecipientContry+
                        '&add='+recip.RecipientAddress;
       //this.props.history.push('/Shipment');
       this.props.history.push({
           pathname:'/Shipment',
           search:'?'+qString
       })
        
    }
    render() {
      //const lstSenders = this.props.lstSenders;
        
        
return (  

   
    <div> 
    <Table striped boarder hover size="sm">
        <thead>
            <tr>
                <th>Recipient ID</th>
                <th>Recipient Name</th>
                <th>Company</th>
                <th>Country</th>
                <th>Address</th>
                <th>Select</th>
            </tr>
        </thead>
          <tbody>
            {this.state.recipients.map(recipient=>
               <tr key={recipient.RecipientID}>
                   <td>{recipient.RecipientID}</td>
                   <td>{recipient.RecipientName}</td>
                   <td>{recipient.RecipientCompany}</td>
                   <td>{recipient.RecipientContry}</td>
                   <td>{recipient.RecipientAddress}</td>
                   <td hidden={this.state.isDirect}>
                       <button 
                       onClick={()=>this.props.onchoose(recipient)}>Select</button>
                   </td>
                   {/* <td hidden={!this.state.isDirect}>
                  
                   <Link to={{pathname:'/Shipment',selectedRecipient:recipient}}>
                       Create Shipment
                   </Link>
                    </td> */}
                   <td hidden={!this.state.isDirect}>
                       <button 
                       onClick={()=>this.createShipment(recipient)}>Create Shipment</button>

                   </td>
               </tr>
               )}
            </tbody>
    </Table>
 </div>
    


      );  }}
  
  
  export default Recipients;