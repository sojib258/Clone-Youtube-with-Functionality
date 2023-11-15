import GradeIcon from '@mui/icons-material/Grade';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
const Sidebar = () => {
    return(
        <Box className="sidebar"> 
            <Link sx={{textDecoration: "none"}} to="/favourite" component={RouterLink}> 
                <IconButton className='sidebar-button'> 
                    <GradeIcon sx={{fontSize: "1.4rem"}}/>
                    <Typography sx={{fontSize: ".7rem"}}>Favourites</Typography>
                </IconButton>
            </Link>
            <Link sx={{textDecoration: "none"}} to="/recent" component={RouterLink}> 
                <IconButton className='sidebar-button'> 
                    <PlaylistAddCheckCircleIcon sx={{fontSize: "1.4rem"}}/>
                    <Typography sx={{fontSize: ".7rem"}}>Recent Playlist</Typography>
                </IconButton>
            </Link>
            <Link sx={{textDecoration: "none"}} to="/history" component={RouterLink}> 
                <IconButton className='sidebar-button'> 
                    <HistoryIcon sx={{fontSize: "1.4rem"}}/>
                    <Typography sx={{fontSize: ".7rem"}}>History</Typography>
                </IconButton>
            </Link>
        </Box>
    )
}

export default Sidebar;