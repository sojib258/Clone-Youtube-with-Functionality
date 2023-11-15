import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import useResponsiveValue from "../../hooks/useResponsiveValue";
import dateFormat from "../../utils/dateFormat";
import highLightMatch from "./HighLightMatch";
const HistoryItem = ({item, inputValue}) => {
    const imageWidth = useResponsiveValue("historyImgWidth")
    const historyItem = useResponsiveValue("historyItem")
    const channelTitle = useResponsiveValue("channelTitle")
    const historyTitle = useResponsiveValue("historyTitle")
    const description = useResponsiveValue("historyDescription")

    const videoId = item.contentDetails.videoId
    const playlistId = item.playlistId

    // For show history created time
    const time = dateFormat(item.date)

  return (
    <>
      <Link to={`/player/watch/${videoId}/${playlistId}`} component={RouterLink} sx={{textDecoration: "none", backgroundColor: "red",'&:hover':{color: "transparent",backgroundColor: "transparent"
      }}}>
        <Stack direction={"row"} sx={historyItem}> 
          <Box sx={{paddingRight: "10px"}}>
              <Box sx={{borderRadius: "8px", width: imageWidth, height: "auto"}} component="img" src={item.videoThumbnails.medium.url} alt="history-thumbnail-image"/>
          </Box>
          <Box> 
              <Typography sx={{color: "#fff", fontSize: historyTitle}}>
                {highLightMatch(item.videoTitle, inputValue)}
              </Typography>
              <Typography sx={{color: "#c5c5c5", fontSize: channelTitle}}>
                {item.channelTitle} @ <Typography sx={{fontSize: channelTitle, color: "#95f8b1"}} component={"span"}> {time}</Typography>
              </Typography>
              <Typography sx={{color: "#c5c5c5", fontSize: description}}>
                {item.videoDescription.length > 180 ? item.videoDescription.slice(0, 180) + "..." : item.videoDescription}
              </Typography>
          </Box>
        </Stack>
      </Link>
    </>
  )
}

export default HistoryItem