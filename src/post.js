import React, { useEffect,useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';
import { Box, Grid, InputLabel, Paper } from '@mui/material';
import { FormControl } from 'react-bootstrap';
import { BootstrapInput } from './common';

// import {users} from './users';

function Post() {
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const[password, setPassword]=useState("");
function saveUser(){
  console.log({name,email,password})
  let data= {name,email,password}
  fetch("http://localhost:8080/register",{
    method:'POST',
    headers:{
      'Accept':'aaplication/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  }).then((result)=>{
    console.log(result);
    alert("ok")
  })
  
}

  return (
    <Box
    sx={{
      width: '100%',
      height: '100%',
    }}
    component={Paper}
  >
   <Box
        component={'form'}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
          px: 5,
          bgcolor: 'grey',
        }}
        noValidate
        autoComplete='off'
      >
    <Grid container sx={{ width: '100%', alignSelf: 'center' }} spacing={0}>
    
      <div className="App">
          <h1>Bulk Order Info</h1>
          <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name='name' placeholder='Name'/> <br /> <br />
          <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder='Email'/> <br /> <br />
          <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} name='password' placeholder='password'/> <br /> <br />
          <button type='button' onClick={saveUser}>Register</button>
        </div>
    
        
    </Grid>
    
  </Box>

  </Box>
    
  );

}

export default Post;
