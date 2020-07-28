import React,{Component} from 'react';
import Recipients from './Recipients';
import {Button,ButtonToolbar} from 'react-bootstrap'
import {Modal,Row,Col,Form} from 'react-bootstrap';

class RecipientsModal extends Component {
    constructor(props){
        super(props);
    }
    onselectrecipient=(recipient)=>{
        
        if(this.props.recipientonselect!=null)
         { 
          this.props.recipientonselect(recipient);
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
               
                <Recipients onchoose={this.onselectrecipient}/>
                
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal> 
           
      );  }}
  
  
  export default RecipientsModal;