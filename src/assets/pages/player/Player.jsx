import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { Box } from "@mui/material";
import { default as Grid } from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import PlaylistItems from '../../components/shared/PlaylistItems';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import useResponsiveValue from '../../hooks/useResponsiveValue';

const Player = () => {

    // For Styling
    const plWidth = useResponsiveValue("playerPagePlWidth")
    const plBox = useResponsiveValue("playerBox")
    const plIcon = useResponsiveValue("playerIcon")
    const plIconPosition = useResponsiveValue("plIconPosition")

    // For State
    const {videoId} = useParams()
    const [showPlaylist, setShowPlaylist] = useState(false)

  return (
    <Box sx={plBox}> 
        <Grid container>
            <Grid sx={{width: "100%"}} item sm={12}>
                <Box className='player-wrapper'> 
                    <VideoPlayer/>
                </Box>
            </Grid>
        </Grid>
        <Box> 
            <IconButton onClick={() => setShowPlaylist(!showPlaylist)} sx={{color: "white",backgroundColor: "#5a5a5a", position: "fixed", right: plIconPosition, top: "12px", cursor: "pointer",zIndex: "1000",transition: ".3s",'&:hover':{backgroundColor: "#262626"}}}>
                    <PlayCircleOutlineRoundedIcon sx={plIcon}/>
            </IconButton>
            {showPlaylist && (
                <Box sx={{position: "absolute", top: "80px", right: "30px", width: plWidth, height: "90vh", overflow: "hidden", border: "1px solid #383838", borderRadius: "25px", backgroundColor: "#0F0F0F"}}>
                    <PlaylistItems imgSize='default'/>
                </Box>
            )}
        </Box>
    </Box>
  )
}

export default Player