import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';

export default function Log() {

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instagram
          </Typography>
          <Button as={Link} to="/Sign" color="inherit">sign</Button>
          <Button as={Link} to="/" color="inherit">home</Button>
          <Button as={Link} to="/Newpost" color="inherit">newpost</Button>
          <Button as={Link} to="/post" color="inherit">post</Button>

        </Toolbar>
      </AppBar>
    </Box>

    
  );
}