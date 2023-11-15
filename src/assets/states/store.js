import { action, createStore, persist, thunk } from "easy-peasy";
import getPlaylist from "../api/Api";

const store = createStore(persist({
    playlists: {},
    favourites: [],
    recentPlaylists: [],
    histories: [],
    error: "",
    isLoading: false,

    // For Playlists
    addPlaylist: action((state, payload) => {
        state.playlists[payload.playlistId] = payload
    }),
    removePlaylist: action((state, payload) => {
        delete state.playlists[payload]
        // This code for remove history
        state.histories = state.histories.filter(item => item.playlistId !== payload)
    }),
    fetchPlaylist: thunk(async({addPlaylist, setError, setLoading}, payload, {getState}) => {
        if(getState().playlists[payload]){
            alert("Playlist already exist!")
            return;
        }
        setLoading(true)
        try{
            setError("")
            const data = await getPlaylist(payload)
            if(data && Object.keys(data).length > 0){
                addPlaylist(data)
            }
        }catch(e){
            if(e.response){
                setError(e.response.data?.error?.message);
            }else{
                setError(`Something went wrong: ${e}`);
            }
        }finally{
            setLoading(false)
        }
    }),

    // For Favourite
    addFavourite: action((state, payload) => {
        state.favourites.unshift(payload)
        state.favourites = state.favourites.slice(0, 5)
    }),
    removeFavourite: action((state, payload) => {
        state.favourites = state.favourites.filter(item => item !== payload)
    }),

    // For Recent
    addRecent: action((state, payload) => {
        let recentIds = state.recentPlaylists
        if(recentIds.includes(payload)){
            const elementPosition = recentIds.indexOf(payload)
            if(elementPosition !== -1){
                recentIds.splice(elementPosition, 1)
                recentIds.unshift(payload)
            }
            return;
        }
        recentIds.unshift(payload)
        state.recentPlaylists = state.recentPlaylists.slice(0,5)
    }),
    removeRecent: action((state, payload) => {
        state.recentPlaylists = state.recentPlaylists.filter(item => item !== payload)
    }),

    // For History
    addHistory: action((state, payload) => {
        const [playlistId, playlistItems] = payload
        const date = new Date()
        if(playlistId){
            const videoId = playlistItems.contentDetails.videoId
            const existVideoIndex = state.histories.findIndex(item => item.contentDetails.videoId === videoId)
            if(existVideoIndex !== -1){
                const [existItem] = state.histories.splice(existVideoIndex, 1)
                state.histories.unshift(existItem)
            }else{
                state.histories.unshift({
                    playlistId,
                    ...playlistItems,
                    date: date
                });
                state.histories = state.histories.slice(0, 40)
            }
        }
    }),
    removeAllHistory: action((state, payload) => {
        state.histories = []
    }),

    // For error and loading
    setError: action((state, payload) => {
        state.error = payload
    }),
    setLoading: action((state, payload) => {
        state.isLoading = payload
    },)},{
    storage: "localStorage",
}))


export default store;





