import Header from "./Header";
import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";
import { Table } from "react-bootstrap";
import Modal from "./Component/UpdateModal"




function Dashboard() {
    const { http } = AuthUser();
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    
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
            
        })
    }

    function UpdateUsers(id,name,email) {
        // alert("Are You Want Sure Update Record Number " + id);
        //  window.emailtoupdate = email;
        //  window.nametoupdate = name;    
         console.log("testing data for api",data)
        setName(name);
       setEmail(email);

        
        
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
                                <td><button onClick={() => {setShow(true); UpdateUsers(item.id,item.name,item.email)}}>update</button> </td>
                                <td><button onClick={() => (DeleteUsers(item.id))}>Delete</button> </td>

                            </tr>



                        )
                    }

        <Modal show={show} name={name} email={email} handleClose={handleClose}/>

                </tbody>
            </Table>
                        
        </div>

    )
}
export default Dashboard;