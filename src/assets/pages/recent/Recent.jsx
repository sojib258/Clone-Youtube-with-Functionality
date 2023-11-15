import { Box } from "@mui/material"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useStoreState } from "easy-peasy"
import React from 'react'
import RecentCard from "../../components/recent/RecentCard"
import useResponsiveValue from "../../hooks/useResponsiveValue"
const RecentList = () => {

    // For Style
    const recentBox = useResponsiveValue("boxStyle")


    const recentPlaylistIds = useStoreState(state => state.recentPlaylists)
    
  return(
    <>
        <Box sx={recentBox}> 
            <Typography variant="body1" sx={{color: "white", marginBottom: "25px"}}> 
                Recents: {recentPlaylistIds.length <= 0 ? <Typography component="span" sx={{fontSize: ".7rem"}}>You don't have any recent items</Typography> : <Typography component="span" sx={{fontSize: ".7rem"}}>You can add a maximum of 5 most recent playlist items.</Typography>}
            </Typography>
            <Grid container> 
                {recentPlaylistIds.map(id => (
                <Grid sx={{padding: "10px"}} key={id} item lg={3} md={4} sm={6} xs={12}>
                    <RecentCard playlistId={id}/>
                </Grid>
                ))}
            </Grid>
        </Box>
    </>
  )
}

export default RecentList