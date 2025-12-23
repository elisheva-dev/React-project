import './Login.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { PasswordSharp } from '@mui/icons-material';
import  { useState } from "react";
import Swal from 'sweetalert2'
import { observer } from 'mobx-react';
import GlobalState from '../global/GlobalState';


const Login = (observer(()=> {
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://businessmeet.onrender.com/login";
    const data = { name, password };
    console.log('handleSubmit called');
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Login success!");
        GlobalState.setIsAdmin(true);
        console.log( GlobalState.isAdmin)
   
      } else {
        console.log("Login failed!");
        Swal.fire({
          title: "Login to the system administrator only!",
          icon: "warning"
        });
        setName("")
        setPassword("")
       
      }
    } catch (error) {
      console.error("Error:", error);
    }
   
  };
  return (
    <>
    <Card sx={{ maxWidth: 345 }} id="loginCard">
    <form  onSubmit={handleSubmit}>
   <Box sx={{ '& > :not(style)': { m: 1 } }} onSubmit={handleSubmit}>
   
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="name" label="Name" variant="standard" type="text"  value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PasswordSharp sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

        <TextField id="password" label="Password" variant="standard" type='password' value={password}
        onChange={(e) => setPassword(e.target.value)}/>
         
         <br />
      
      </Box>
      <button type="submit">log in</button>
    </Box>
    </form>
  </Card>  
    </>
  )
}))

export default Login

