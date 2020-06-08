import React,{Component} from 'react';
import Sender from '../../components/Database/sender';

class Shipment extends Component {
    constructor(){
      super();
      this.state={sender:{}}
    }
   
  onSelectSender=(selectedSender)=>{
    this.setState({sender:selectedSender});
  };
  
render() {
  
  return (  
   <Sender onChoose={this.onSelectSender}/>
  
);}
}
   
   
   export default Shipment;