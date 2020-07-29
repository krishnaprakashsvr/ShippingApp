import React,{Component} from 'react';
import Sender from '../../components/Database/sender';
import Recipient from '../../components/Database/Recipient';

class Shipment extends Component {
    constructor(props){
      super(props);
      this.state={sender:{},recipient:null}
      
    }
   
  onselectsender=(selectedSender)=>{
    this.setState({sender:selectedSender});
  };
  onselectrecipient=(selectedRecipient)=>{
    this.setState({recipient:selectedRecipient});
  };
 
render() {
  const qString= new URLSearchParams(this.props.location.search);
  const recip = {"RecipientID":qString.get('id'),
  "RecipientName":qString.get('name'),
  'RecipientCompany':qString.get('comp'), 
  'RecipientContry':qString.get('cnty'),
  'RecipientAddress':qString.get('add')};
  
    return (  
      <div>
        <Sender seltdSender={this.props.location.selectedSender}
         onChoose={this.onselectsender}/>
         {/* <Recipient seltdRecipient={this.props.location.selectedRecipient}
         onChoose={this.onselectrecipient}/> */}
          <Recipient seltdRecipient={recip}
         onChoose={this.onselectrecipient}/>
      </div>

);}
}
   
   
   export default Shipment;