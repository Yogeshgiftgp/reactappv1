import Header from "./Header";
import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";
import { Button, Form, Modal, Table } from "react-bootstrap";
// import Modal from "./Component/UpdateModal"




function Dashboard() {
    const { http } = AuthUser();
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [userId, setUserId]= useState();
    
    useEffect(() => {


        GetAllUsers();
    }, []);

    async function GetAllUsers() {
        http.get('/userlist').then((resp) => {

            // console.log("testing name",resp.data.users[0].name)

            console.log("data", resp.data.users);
            setData(resp.data.users)
            setName(resp.data.user[0].name) 
            setEmail(resp.data.users[0].email)
            setUserId(resp.data.users[0].id)
            
        })
    }


    function SelectUser(id,name,email){
        alert("Are You Want Sure Update Record Number " + id);
        setName(name);
        setEmail(email);
        setUserId(id);
    }

    function UpdateUsers() {
       
        let updateUserItem = {name,email,userId}
         console.log("testing data for api",updateUserItem)
       
       http.put('/updateuser/' +userId, {name:name,email:email}).then((res)=>{
        console.log(res);
        
       })
       GetAllUsers();  
        
    }

   


    function DeleteUsers(id) {

        http.delete('/deleteuser/' + id).then((resp) => {

            alert("Are You Want Sure Delete Record")
            GetAllUsers();


        })
    }


    return (

        <div>
            <Header />
            <h1>Order/User</h1>



            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th colSpan={2}>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>


                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.created_at}</td>
                                <td><button onClick={() => {setShow(true); SelectUser(item.id,item.name,item.email)}}>update</button> </td>
                                <td><button onClick={() => (DeleteUsers(item.id))}>Delete</button> </td>

                            </tr>



                        )
                    }

        <Modal show={show} name={name} email={email} handleClose={handleClose}/>

                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Update User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UpdateUsers}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                        
        </div>

    )
}
export default Dashboard;