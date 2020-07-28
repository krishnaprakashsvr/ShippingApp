import React,{Component} from 'react';
import Recipients from '../Database/Recipients';
import {Modal,Button,Row,Col,Form,ButtonToolbar} from 'react-bootstrap';
import '../../components/Shipment/Shipment.css';
import {Header} from '../NavAndHeader/Header'
import RecipientsModal from '../Database/RecipientsModal';

class Recipient extends Component {
    constructor(props){
      super(props);
      this.state={addModalShow:false,
                  selectedRecipient:{}}
    }
   componentDidMount(){
    if(this.props.seltdRecipient!=null)
     {
       this.setState({selectedRecipient:this.props.seltdRecipient})
     }
   }
  onselectrecipient=(recipient)=>{
    
    this.setState({addModalShow:false});
    
    this.setState({selectedRecipient:recipient});

    if(this.props.onChoose!=null)
     { 
      this.props.onChoose(recipient);
     }
  };
  
render() {
  let addModalClose=()=>this.setState({addModalShow:false});
   
  return (  
    <div className='sender-list'> 
    <div > <Header customStyle='Header-small'  name='Recipient Details'/></div>
    <table >
    <tbody>
      <tr>
        <td><strong>Recipient ID:</strong></td>
        <td><input name="RecipientId" type="text"            
                value={this.state.selectedRecipient.RecipientID} /></td>
        <td>
        <ButtonToolbar>
          <Button onClick={()=>this.setState({addModalShow:true})}>          
                ...
          </Button>
          <RecipientsModal recipientonselect={this.onselectrecipient} 
            show={this.state.addModalShow} 
            onHide={addModalClose}/>
        </ButtonToolbar>
        </td>
      </tr>
      <tr>
        
        
      </tr>
      <tr>
        <td><strong>Recipient Name:</strong></td>
        <td><input name="recipientName" type="text"            
                value={this.state.selectedRecipient.RecipientName} /></td>
      </tr>
      <tr>
      <td><strong>Company:</strong></td>
      <td><input name="recipientCompany" type="text"            
                value={this.state.selectedRecipient.RecipientCompany} /></td>
      </tr>
      <tr>
      <td><strong>Country:</strong></td>
      <td><input name="recipientCompany" type="text"            
               value={this.state.selectedRecipient.RecipientContry} /></td>
      </tr>
      <tr>
        <td><strong>Address:</strong> </td>
        <td><input name="recipienCompany" type="text"            
                value={this.state.selectedRecipient.RecipientAddress} /></td>
      </tr>
      </tbody>
    </table>
   </div>
);}
}
   
   
   export default Recipient;