import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap'
import {Modal,Row,Col,Form} from 'react-bootstrap';

class Senders extends Component {
    constructor(props){
        super(props);
        this.state={senders:[]}
    }
    componentDidMount(){
        this.refreshlist();
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
    render() {
      //const lstSenders = this.props.lstSenders;
        
return (  
<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Senders List..
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
<div className='container'>
   
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
                   <td>
                       <button onClick={()=>this.props.onSelect(sender)}>Select</button>
                   {/* <ButtonToolbar>
                        <Button variant='danger'
                            onClick={()=>this.props.onSelectSender(sender.SenderID)}          
                            >Select
                        </Button>  
                    </ButtonToolbar>                  */}
                   </td>
               </tr>
               )}
            </tbody>
    </Table>
 </div>
    

</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal> 
      );  }}
  
  
  export default Senders;