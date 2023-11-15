import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useStoreState } from 'easy-peasy';
import { Link as RouterLink } from 'react-router-dom';
const RecentCard = ({playlistId}) => {

  const {playlists} = useStoreState(state => state)
  const {playlistTitle, playlistDescription, playlistThumbnails, playlistItems} = playlists[playlistId]
  const videoId = playlistItems[0]?.contentDetails?.videoId

  return (
        <Link to={`/player/watch/${videoId}/${playlistId}`} component={RouterLink} sx={{textDecoration: "none", backgroundColor: "red",'&:hover':{color: "transparent", backgroundColor: "transparent"
            }}}>
            <Card sx={{background: "#0F0F0F", padding: "15px 10px",borderRadius: "15px"}}  className='playlist-card'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={playlistThumbnails.high.url}
                  alt="Favourite Card Image"
                  sx={{borderRadius: "15px"}}
                />

                <CardContent sx={{padding: "15px 0px 10px 0px"}}>
                  <Typography title={playlistTitle} sx={{color: "white", paddingBottom: "4px"}} variant="body2">
                    {playlistTitle.length > 60 ? playlistTitle.slice(0, 50) + `...` : playlistTitle}
                  </Typography>

                  <Typography sx={{color: "#adadad", fontSize: ".76rem",paddingBottom: "4px"}}>{playlistItems[0].channelTitle}</Typography>

                  <Typography sx={{color: "#adadad", fontSize: ".76rem"}}>{playlistDescription.length > 150 ? playlistDescription.slice(0, 150) + `...` : playlistDescription}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
    )
}

export default RecentCard