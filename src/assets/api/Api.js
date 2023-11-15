import axios from "axios";
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY

export const getPlaylistItems = async (playlistId, pageToken = "") => {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2CcontentDetails%2Csnippet%2Cstatus&maxResults=50&pageToken=${pageToken}&playlistId=${playlistId}&key=${apiKey}`;

    let result = {
        items: [],
        pageInfo: null
    };
    try{
        const { data } = await axios.get(url);
        result.items.push(...data.items);
        result.pageInfo = data.pageInfo;
        if (data.nextPageToken) {
            const data2 = await getPlaylistItems(playlistId, data.nextPageToken);
            result.items.push(...data2.items);
        }
        return result;
    }catch(e){
        if(e.message === "Network Error"){
            alert("There is a problem in your network, please refresh the page and try again")
            return;
        }if(e.response){
            alert("PlaylistId or URL in not valid")
            return;
        }
    }
};


const getPlaylist = async (playlistId) => {
    const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2Csnippet%2Cstatus&id=${playlistId}&key=${apiKey}`

    try{
        let {items: playlistItems, pageInfo} = await getPlaylistItems(playlistId)
        const {data} = await axios.get(url)

        // Take playlistTitle, playlistDescripton and playlistThumbnails from playlist Object
        let {title: playlistTitle, description: playlistDescription, thumbnails: playlistThumbnails} = data?.items[0].snippet
    
        // Take PlaylistItems need information from playlistItems Object
        playlistItems = playlistItems.map(item => {
            const {title: videoTitle, description: videoDescription, channelId, channelTitle, thumbnails: videoThumbnails } = item.snippet
            
            return {
                videoTitle,
                videoDescription,
                channelId,
                channelTitle,
                videoThumbnails,
                contentDetails: item.contentDetails
            }
        })

        return {
            playlistId,
            playlistTitle,
            playlistDescription,
            playlistThumbnails,
            playlistItems,
            pageInfo: pageInfo
        }
    }catch(e){
        return {}
    }
}


export default getPlaylist;








