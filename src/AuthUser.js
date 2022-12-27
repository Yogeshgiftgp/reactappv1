import axios from "axios";


function AuthUser(){

const http =axios.create({
    baseURL:"http://localhost:8080",
    headers: {

        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("local_token"),
       
    },
    
   
});
return{
    http
}



}
export default AuthUser;