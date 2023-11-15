import GitHubIcon from '@mui/icons-material/GitHub'
import { Box } from "@mui/material"
import Grid from "@mui/material/Grid"
import Link from '@mui/material/Link'
import Typography from "@mui/material/Typography"
import { useStoreState } from "easy-peasy"
import Loading from "../../components/loading/Loading"
import PlaylistCard from "../../components/playlist/PlaylistCard"
import useResponsiveValue from "../../hooks/useResponsiveValue"
const HomePage = () => {

  // For Styling
  const homeBoxStyle = useResponsiveValue("boxStyle")
  const githubIconLink = useResponsiveValue("githubIconLink")
  const githubIcon = useResponsiveValue("githubIcon")

  const playlists= useStoreState(state => state.playlists)
  const isLoading= useStoreState(state => state.isLoading)
  const playlistArray = Object.keys(playlists)
  return(
    <> 
      <Box sx={homeBoxStyle}> 
        {isLoading ? (
          <Loading/>
        ) : (
          <Box>
            {playlistArray.length > 0 ? (
              <Typography sx={{ color: "#fff", marginBottom: "5px", fontSize: "1.2rem" }} variant="body2">
                Created playlists:
              </Typography>
            ) : (
              <Typography sx={{ color: "white", marginBottom: "5px", fontSize: "1.1rem" }} variant="body2">
                You didn't add any playlist yet
              </Typography>
            )}

            <Grid container>
              {playlistArray.map((key) => (
                <Grid sx={{ padding: "10px" }} key={key} item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                  <PlaylistCard playlistId={key} />
                </Grid>
              ))}
            </Grid>

            {/* GitHub Link Addd */}
            <Link href={'https://github.com/sojib258/Clone-Youtube-with-Functionality'} target='_blank' sx={githubIconLink}> 
              <GitHubIcon sx={githubIcon} />
            </Link>
          </Box>
        )}
      </Box>
    </>
  )
}
export default HomePage;