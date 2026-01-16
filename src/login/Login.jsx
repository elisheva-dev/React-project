import './Login.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { PasswordSharp } from '@mui/icons-material';
import { useState } from "react";
import Swal from 'sweetalert2'
import { observer } from 'mobx-react';
import GlobalState from '../global/GlobalState';

const Login = observer(() => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [showLink, setShowLink] = useState(false);

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
        <form onSubmit={handleSubmit}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="name" label="Name" variant="standard" type="text" value={name}
                onChange={(e) => setName(e.target.value)} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PasswordSharp sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="password" label="Password" variant="standard" type='password' value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </Box>
            <button type="submit" className='button'>log in</button>
          </Box>
        </form>
      </Card>

      <div style={{ marginTop: '10px' }}>
      <button
        onClick={() => setShowLink(!showLink)}
        style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '5px 10px', cursor: 'pointer' }} >ספוילר</button>
      <span className={`no-code-link ${showLink ? 'visible' : ''}`} onClick={() => GlobalState.setIsAdmin(true)} >לכניסה ללא קוד </span>
    </div>
      
    </>
  )
})

export default Login

