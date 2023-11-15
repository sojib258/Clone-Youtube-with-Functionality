import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
const VideoPlayer = () => {

    const {videoId, playlistId} = useParams()


  return (
    <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls={true}
        width={"100%"}
        height={"100%"}
        playing={true}
    />
  )
}

export default VideoPlayer