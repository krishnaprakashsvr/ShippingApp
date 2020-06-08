import React,{Component} from 'react';
import Senders from './Senders';
import {Button,ButtonToolbar} from 'react-bootstrap'
import {Modal,Row,Col,Form} from 'react-bootstrap';

class SendersModal extends Component {
    constructor(props){
        super(props);
    }
    onselectsender=(sender)=>{
        
        if(this.props.senderonselect!=null)
         { 
          this.props.senderonselect(sender);
         }
      };
    render() {
        return (  

        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Senders List..
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
                <Senders onchoose={this.onselectsender}/>
                
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal> 
           
      );  }}
  
  
  export default SendersModal;