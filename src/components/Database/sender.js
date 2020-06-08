import React,{Component} from 'react';
import Senders from '../Database/Senders';
import {Modal,Button,Row,Col,Form,ButtonToolbar} from 'react-bootstrap';
import '../../components/Shipment/Shipment.css';
import {Header} from '../NavAndHeader/Header'
import SendersModal from '../Database/SendersModal';

class Sender extends Component {
    constructor(props){
      super(props);
      this.state={addModalShow:false,
                  selectedSender:{}}
    }
   componentDidMount(){
    if(this.props.seltdSender!=null)
     {
       this.setState({selectedSender:this.props.seltdSender})
     }
   }
  onSelectSender=(sender)=>{
    
    this.setState({addModalShow:false});
    this.setState({selectedSender:sender});

    if(this.props.onChoose!=null)
     { 
      this.props.onChoose(sender);
     }
  };
  
render() {
  let addModalClose=()=>this.setState({addModalShow:false});
   
  return (  
    <div className='sender-list'> 
    <div > <Header customStyle='Header-small'  name='Sender Details'/></div>
    <table >
      <tr>
        <td><strong>Sender ID:</strong></td>
        <td><input name="senderId" type="text"            
                Value={this.state.selectedSender.SenderID} /></td>
        <td>
        <ButtonToolbar>
          <Button onClick={()=>this.setState({addModalShow:true})}>          
                ...
          </Button>
          <SendersModal senderOnSelect={this.onSelectSender} 
            show={this.state.addModalShow} 
            onHide={addModalClose}/>
        </ButtonToolbar>
        </td>
      </tr>
      <tr>
        
        
      </tr>
      <tr>
        <td><strong>Sender Name:</strong></td>
        <td><input name="senderName" type="text"            
                Value={this.state.selectedSender.SenderName} /></td>
      </tr>
      <tr>
      <td><strong>Company:</strong></td>
      <td><input name="senderCompany" type="text"            
                Value={this.state.selectedSender.SenderCompany} /></td>
      </tr>
      <tr>
      <td><strong>Country:</strong></td>
      <td><input name="senderCompany" type="text"            
               Value={this.state.selectedSender.SenderContry} /></td>
      </tr>
      <tr>
        <td><strong>Address:</strong> </td>
        <td><input name="senderCompany" type="text"            
                Value={this.state.selectedSender.SenderAddress} /></td>
      </tr>
    </table>
   </div>
);}
}
   
   
   export default Sender;