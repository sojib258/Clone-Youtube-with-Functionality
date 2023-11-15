import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useResponsiveValue from '../../hooks/useResponsiveValue';
import DeleteAlert from './DeleteAlert';

const PlaylistCard = ({playlistId}) => {

  const imageHeight = useResponsiveValue("playlistCardImageHeight")
  const {playlists, favourites}= useStoreState(state => state)
  const {addFavourite, removeFavourite, removePlaylist, addRecent, removeRecent, addHistory} = useStoreActions(action => action)

  const {playlistTitle, playlistThumbnails, playlistItems } = playlists[playlistId]

  const videoId = playlistItems[0]?.contentDetails?.videoId
  const handleAddFavourite = () => {
    addFavourite(playlistId)
  }

  const handleRemoveFavourite = () => {
    removeFavourite(playlistId)
  }

  const handleDeletePlaylist = () => {
    removePlaylist(playlistId),
    removeFavourite(playlistId)
    removeRecent(playlistId)
  }

  const handleAddRecent = () => {
    addRecent(playlistId)
    addHistory([playlistId, playlistItems[0]])
  }

  // This for Favourite Button Conditionally Render
  const isFavourite = (playlistId) => favourites.includes(playlistId)

  const [hover, setHover] = useState(false)


  // For Open Delete Alert Msg
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card sx={{background: "#0F0F0F", padding: "15px 10px",borderRadius: "15px", height: "100%", display: "flex", flexDirection: "column"}}  className='playlist-card'>

      <Link to={`/player/watch/${videoId}/${playlistId}`} component={RouterLink} sx={{textDecoration: "none", '&:hover': {
        color: "transparent", backgroundColor: "transparent"
      }}}>
        <CardActionArea onClick={handleAddRecent}>
          <Box sx={{position: "relative"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
            <CardMedia
              component="img"
              image={playlistThumbnails.high.url}
              alt="playlist card image"
              sx={{borderRadius: "15px", width: "100%", height: imageHeight}}
            />
            {/* This Box is for hover effect */}
            <Box sx={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "100", display: hover ? "block" : "none"}}>
              <Typography sx={{width: "100", height: "100%",display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontWeight: "bold"}}><PlayArrowIcon/> PLAY ALL</Typography>
            </Box>
          </Box>
          
          <CardContent sx={{padding: "15px 0px 0px 0px"}}>
            <Typography title={playlistTitle} sx={{color: "white", marginBottom: "5px"}} variant="body2" color="text.secondary">
              {playlistTitle.length > 50 ? playlistTitle.slice(0, 50) + `...` : playlistTitle}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Link>

      <CardActions sx={{padding: "0px", display: "block"}}>
        <Stack direction={'row'} justifyContent={"space-between"}  alignItems={'center'}> 
          <Link to={`/playlist/${playlistId}`} component={RouterLink}> 
            <Button sx={{padding: "0px",color: "#939292", marginBottom: "20px", textTransform: "none", '&:hover': {
            color: "#fff",
            backgroundColor: "#0F0F0F"
          }}} size="small">View full playlist</Button>
          </Link>
          {isFavourite(playlistId) ?
          <IconButton title='Remove from favourite' onClick={handleRemoveFavourite} sx={{color: "white"}}> 
            <FavoriteIcon sx={{fontSize: "1rem", color: "#fd9595"}}/> 
          </IconButton> : 
          <IconButton title='Add to favourite' onClick={handleAddFavourite} sx={{color: "white"}}> 
            <FavoriteBorderIcon sx={{fontSize: "1rem"}}/>
          </IconButton>}
        </Stack>
      </CardActions>

      <Button onClick={handleClickOpen} sx={{padding: "4px 15px", fontSize: ".8rem", marginTop: "auto", alignSelf: "flex-start",}} variant='contained' color='error'>Delete</Button>
      <DeleteAlert handleDeletePlaylist={handleDeletePlaylist} open={open} handleClose={handleClose}/>
    </Card>
  );
}

export default PlaylistCard;