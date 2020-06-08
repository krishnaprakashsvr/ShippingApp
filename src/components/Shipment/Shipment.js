import React,{Component} from 'react';
import Sender from '../../components/Database/sender';

class Shipment extends Component {
    constructor(props){
      super(props);
      this.state={sender:{}}
      
    }
   
  onSelectSender=(selectedSender)=>{
    this.setState({sender:selectedSender});
  };
 
render() {
    return (  
      <div>
        <Sender seltdSender={this.props.location.selectedSender}
         onChoose={this.onSelectSender}/>
      </div>
);}
}
   
   
   export default Shipment;