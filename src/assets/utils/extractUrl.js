const extractPlaylistId = (input) => {
    const playlistIdRegex = /[a-zA-Z0-9_-]{34}/;
    const playlistIdMatch = input.match(playlistIdRegex);
  
    if (playlistIdMatch) {
      return playlistIdMatch[0];
    }
    return null;
}
export default extractPlaylistId