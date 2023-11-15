import { Box } from "@mui/material";
import { default as Link } from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link as RouterLink, useParams } from "react-router-dom";
import useResponsiveValue from "../../hooks/useResponsiveValue";
const PlaylistItems = ({imgSize="medium"}) => {

    // For Styling
    const titleLength = useResponsiveValue("plItemsTitleLength")
    const plHeight = useResponsiveValue("playlistLeftSidebarHeight")

    // For State
    const playlists = useStoreState(state => state.playlists)
    const {addRecent, addHistory} = useStoreActions(action => action)
    const {playlistId, videoId} = useParams()

    const {playlistItems, playlistTitle, pageInfo} = playlists[playlistId]
    const channelTitle = playlistItems[0].channelTitle

    const videoNumber = playlistItems.findIndex((item) => item.contentDetails.videoId == videoId)    

    const handleAddRecent = (playlistItems) => {
        addRecent(playlistId)
        addHistory([playlistId, playlistItems])
    }

    return (
        <> 
            <Box sx={{padding: "20px", position: "absolute", top: "0", left: "0", width: "100%", height: "80px", backgroundColor: "#212121", borderRadius: "25px 25px 0px 0px"}}> 
                <Typography title={playlistTitle} sx={{fontSize: "1rem", color: "#fff", fontWeight: "bold", marginBottom: ".4rem"}}> 
                    {playlistTitle.length > titleLength ? playlistTitle.slice(0, titleLength) + "..." : playlistTitle}
                </Typography>
                <Typography sx={{fontSize: ".7rem", color: "#fff"}}> 
                    {channelTitle} - {videoNumber+1}/{pageInfo.totalResults}
                </Typography>
            </Box> 
            <Box sx={{marginTop: "80px",maxHeight: "75vh", overflowY: "scroll",}}> 
                {playlistItems.map((item, index) => (
                <Link onClick={() => handleAddRecent(playlistItems[index])} sx={{textDecoration: "none"}} key={index} to={`/player/watch/${item.contentDetails.videoId}/${playlistId}`} component={RouterLink}>
                    <Stack sx={{margin: "5px 0px", padding: "6px 12px", transition: ".3s", cursor: "pointer",'&:hover':{backgroundColor: "#2F2631"}}} direction={"row"} alignItems={"center"}>
                        <Typography sx={{color: "white", marginRight: "15px"}}> 
                            {index + 1}
                        </Typography>
                        <Box sx={{maxWidth: "150px", borderRadius: "16px"}} src={item.videoThumbnails[imgSize].url} component={"img"}/>
                        <Box sx={{color: "white", marginLeft: "15px"}}>  
                            <Typography title={item.videoTitle} variant="h2" sx={{fontSize: ".8rem", marginBottom: ".3rem", fontWeight: "bold"}}> 
                                {item.videoTitle.length > 70 ? item.videoTitle.slice(0, 70) + "..." : item.videoTitle}
                            </Typography>
                            <Typography sx={{fontSize: ".7rem"}}> 
                                {item.channelTitle}
                            </Typography>
                        </Box>
                    </Stack>
                </Link>
                ))}
            </Box>
        </>
    )
}

export default PlaylistItems