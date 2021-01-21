import React from 'react';

import { Grid, TextField, Button } from '@material-ui/core';


export const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleChange = (event:any) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    }

    if (event.target.password === 'password') {
      setPassword(event.target.value);
    }
  }

  return (
    <Grid 
      container 
      justify="center"
    >

      <Grid item xs={12} sm={12} md={4}>
          <form>
            <div>
              <h4>Login</h4>
            </div>
            
            <div>
              <TextField id="username" label="Username" onChange={handleChange} />
              <TextField id="password" label="Password" onChange={handleChange} />

              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => console.log(username, password) }
              >
                Login
              </Button>
              
            </div>
          </form>
      
      </Grid>
    </Grid>
  );
};