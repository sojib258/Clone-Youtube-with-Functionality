import { Box } from "@mui/material"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useStoreState } from "easy-peasy"
import FavouriteCard from "../../components/favourite/FavouriteCard"
import useResponsiveValue from "../../hooks/useResponsiveValue"
const FavouriteList = () => {
  // For Style
  const favBox = useResponsiveValue("boxStyle")

  // For State
  const favouritesPlaylistIds = useStoreState(state => state.favourites)

  return (
    <Box sx={favBox}> 
      <Typography variant="body1" sx={{color: "white", marginBottom: "25px"}}> 
        Favourites: {favouritesPlaylistIds.length <= 0 ? <Typography component="span" sx={{fontSize: ".7rem"}}>You don't have any favourite items</Typography> : <Typography component="span" sx={{fontSize: ".7rem"}}>You can add a maximum of 5 most recent favourite items.</Typography>}
      </Typography>
      <Grid container> 
        {favouritesPlaylistIds.map(id => (
          <Grid sx={{padding: "10px"}} key={id} item lg={3} md={4} sm={6} xs={12}>
            <FavouriteCard playlistId={id}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FavouriteList