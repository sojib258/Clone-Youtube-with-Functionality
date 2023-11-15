import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useResponsiveValue from '../../hooks/useResponsiveValue';
import LogoImage from "../../img/1.png";
import AddPlaylist from "../playlist/PlaylistForm";

const Navbar = ({handleSidebar}) => {

  // For Style
  const btnFontSize = useResponsiveValue("navBarButton")

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", top: "0", left: "0", width: "100%", zIndex: "1000"}}>
      <AppBar position="static" className='custom-app-bar' sx={{background: "#0F0F0F"}}>
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => handleSidebar()}
            >
              <MenuIcon/>
            </IconButton>
          <IconButton sx={{mr: "auto"}}>
            <Link component={RouterLink} to="/"> 
              <Box component={"img"} sx={{width: "100px", marginTop: "5px"}} src={LogoImage}/>
            </Link>
          </IconButton>
          <Button sx={{color: "#000", fontWeight: "bold", background: "#7eff98", borderRadius: "8px", transition: ".8s", fontSize: btnFontSize, '&:hover': {
            background: "#1eba3d"
          }}} variant="contained" onClick={handleClickOpen}>Add Playlist</Button>
          <AddPlaylist open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;