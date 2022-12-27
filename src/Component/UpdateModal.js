
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// function UpdateModal(props) {
//     const {show, handleClose,name,email} = props;
   
//     const handleonchange =(event)=>{
//       const [name, value] = event.target.value
    
//     }
    
  
// //   const handleShow = () => setShow(true);

//   return (
//     <>
//       {/* <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button> */}

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Users</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 name = "firstemail"
//                 // placeholder="name@example.com"
//                 value={email} 
//                  onChange={((e)=>email(e.target.value))}
//                 autoFocus
//               />
//             </Form.Group>
        
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>name</Form.Label>
//               <Form.Control
//                 type="text"
//                  placeholder="name@example.com"
//                 value={name}
//                 onChange={handleonchange}
//                 autoFocus
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" >
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default UpdateModal;