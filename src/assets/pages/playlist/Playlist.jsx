import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Link as RouterLink, useParams } from "react-router-dom";
import DescriptionDialog from "../../components/playlist/DescriptionDialog";
import Button from '../../components/shared/Button';
import PlaylistItems from '../../components/shared/PlaylistItems';
import useResponsiveValue from '../../hooks/useResponsiveValue';
import theme from '../../styles/Theme';
const Playlist = () => {

    // For Styling
    const plBoxStyle = useResponsiveValue("playlistBox")
    const thumbImg = useResponsiveValue("plThumbnailImage")
    const plHeight = useResponsiveValue("playlistLeftSidebarHeight")

    // For State
    const playlists = useStoreState(state => state.playlists)
    const {addRecent, addHistory} = useStoreActions(action => action)

    const {playlistId} = useParams()

    const {playlistTitle, playlistDescription, playlistThumbnails,playlistItems} = playlists[playlistId]
    
    const videoId = playlistItems[0]?.contentDetails?.videoId

    const handleAddRecent = () => {
        addRecent(playlistId)
        addHistory([playlistId,playlistItems[0]])
    }

    // For Playlist Description
    const isMd = useMediaQuery(theme.breakpoints.up("md"))
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
  return (
    <Box sx={plBoxStyle}> 
        <Grid container> 
            <Grid item sm={12} md={5} sx={{paddingRight: "10px", marginBottom: "30px"}}>
                <Card sx={{borderRadius: "25px", background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", width: "100%", height: plHeight, overflowY: "scroll"}}>
                    <Grid container> 
                        <Grid xs={12} sm={6} md={12} item>
                            <Box> 
                                <CardMedia
                                component="img"
                                image={playlistThumbnails.high.url}
                                alt="playlist-thumbnail-image"
                                sx={thumbImg}
                                />
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={12} item> 
                            <CardContent>
                                <Typography title={playlistTitle} sx={{color: "#fff", fontWeight: "bold", fontSize: "1.5rem"}} component={"h2"} variant="h6">
                                    {playlistTitle}
                                </Typography>
                                <Typography sx={{color: "#ddd"}} variant='body1'> 
                                    {playlistItems[0].channelTitle}
                                </Typography>

                                <Link to={`/player/watch/${videoId}/${playlistId}`} component={RouterLink} sx={{textDecoration: "none", '&:hover': {color: "transparent", backgroundColor: "transparent"}}}>
                                    <IconButton onClick={handleAddRecent} sx={{backgroundColor: "#262626", borderRadius: "25px", padding: "8px 25px", margin: "20px 0px", color: "white", fontWeight: "bold", fontSize: "1.2rem", transition: ".3s", '&:hover':{
                                        background: "#595959",
                                    }}}> 
                                        <PlayArrowIcon/>
                                        Play all
                                    </IconButton>
                                </Link>
                                {isMd ? 
                                    <Typography sx={{ color: "#fff" }}>{playlistDescription}</Typography>:
                                    <Typography sx={{ color: "#fff" }}>
                                        {playlistDescription.length > 60
                                            ? `${playlistDescription.slice(0, 60)}...`
                                            : `${playlistDescription}`}
                                        {playlistDescription.length > 60 && (
                                            <Button onClick={handleClickOpen} text="More"/>
                                        )}
                                    </Typography>
                                }
                                <DescriptionDialog description={playlistDescription} handleClose={handleClose} open={open}/>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item sm={12} md={7} sx={{position: "relative", border: "1px solid #383838", borderRadius: "25px",}}>
                <PlaylistItems/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Playlist