import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link as RouterLink } from 'react-router-dom';
const FavouriteCard = ({playlistId}) => {

  const {playlists} = useStoreState(state => state)
  const {removeFavourite, addRecent, addHistory} = useStoreActions(action => action)
  const {playlistTitle, playlistThumbnails, playlistItems} = playlists[playlistId]
  const videoId = playlistItems[0]?.contentDetails?.videoId

  const handleAddRecent = () => {
    addRecent(playlistId)
    addHistory([playlistId,playlistItems[0]])
  }
  return (
        <Card sx={{background: "#0F0F0F", padding: "15px 10px",borderRadius: "15px"}}  className='playlist-card'>
            <Link to={`/player/watch/${videoId}/${playlistId}`} component={RouterLink} sx={{textDecoration: "none", backgroundColor: "red",'&:hover':{color: "transparent", backgroundColor: "transparent"
            }}}>
              <CardActionArea onClick={handleAddRecent}>
                <CardMedia
                  component="img"
                  image={playlistThumbnails.high.url}
                  alt="Favourite Card Image"
                  sx={{borderRadius: "15px"}}
                />
                <CardContent sx={{padding: "15px 0px 10px 0px"}}>
                  <Typography title={playlistTitle} sx={{color: "white", padding: 0}} variant="body2" color="text.secondary">
                    {playlistTitle.length > 60 ? playlistTitle.slice(0, 50) + `...` : playlistTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions sx={{padding: "5px 0px 0px 0px", display: "block"}}>
              <Box sx={{width: "100%",display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px",}}> 
                <Link to={`/playlist/${playlistId}`} component={RouterLink}> 
                  <Button sx={{padding: "0px", color: "#939292", textTransform: "none", '&:hover': {
                  color: "#fff",
                  backgroundColor: "#0F0F0F"
                }}} size="small">View full playlist</Button>
                </Link>
              </Box>
              <Button onClick={() => removeFavourite(playlistId)} sx={{padding: "4px 15px", minWidth: "auto", fontSize: ".8rem"}} variant='contained' color='error'>Delete From Favourite</Button>
            </CardActions>
        </Card>
    )
}

export default FavouriteCard