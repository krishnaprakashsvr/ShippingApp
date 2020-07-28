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
    return (  
      <div>
        <Sender seltdSender={this.props.location.selectedSender}
         onChoose={this.onselectsender}/>
         <Recipient seltdRecipient={this.props.location.selectedRecipient}
         onChoose={this.onselectrecipient}/>
      </div>

);}
}
   
   
   export default Shipment;