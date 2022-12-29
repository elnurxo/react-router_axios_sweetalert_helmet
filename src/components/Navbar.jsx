import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <Box>
      <AppBar position="static">
        <Toolbar sx={{
      background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(188,183,236,1) 41%, rgba(31,110,203,1) 100%)"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
         <Button variant='contained'style={{marginRight:"10px"}} color="inherit"><Link to='/'>Home</Link></Button>
         <Button variant='contained' color="inherit"><Link to='/add'>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </React.Fragment>
  )
}

export default Navbar