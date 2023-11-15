import { useTheme } from '@emotion/react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone'
import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from 'react'
import HistoryItem from "../../components/history/HistoryItem"
import useResponsiveValue from "../../hooks/useResponsiveValue"

const History = () => {
    // For Style
    const historyBoxStyle = useResponsiveValue("boxStyle")
    const historyHeading = useResponsiveValue("pageHeading")
    const moreBtn = useResponsiveValue("historyMoreBtn")
    const historyClear = useResponsiveValue("historyClearBtn")

    // For Show and Hide Clear History Button
    const theme = useTheme()
    const islg = useMediaQuery(theme.breakpoints.up("lg"))
    
    // For State
    const histories = useStoreState(state => state.histories)
    const removeHistory = useStoreActions(action => action.removeAllHistory)

    const handleDeleteHistory = () => {
        removeHistory()
    }

    // For Show and Hide clear Button
    const [showClearBtn, setShowClearBtn] = useState(false)
    const handleShowClearBtn = () => {
        setShowClearBtn(!showClearBtn)
    }
    
    // For Filter by Search
    const [inputValue, setInputValue] = useState("")
    const filterHistories = histories.filter(item => item.videoTitle.toLowerCase().includes(inputValue.toLocaleLowerCase()))
    
  return (
    <Box sx={historyBoxStyle}> 
        <Typography sx={historyHeading}>Watch History:
            {histories.length > 0 ? 
                <Typography component="span" sx={{fontSize: ".7rem", marginLeft: "10px"}}>You can see your last 40 items only</Typography>: 
                <Typography component="span" sx={{fontSize: ".7rem",marginLeft: "10px"}}>This list has no videos.</Typography>}
        </Typography>

        <Grid container> 
            <Grid item lg={9}> 
                {filterHistories.map((item,index) => (
                    <HistoryItem inputValue={inputValue} key={index} item={item}/>
                ))}
            </Grid>
            {islg && <Grid  item lg={3} >
                 {/* This is Search Input */}
                <TextField onChange={(e) => setInputValue(e.target.value)} className='history-text-field' sx={{color: "#fff", margin: "0px 0px 10px 50px", width: "230px", }} label="Search..." variant="standard" />

                <Button onClick={handleDeleteHistory} sx={{fontSize: ".9rem", color: "#fff", margin: "10px 0px 0px 40px", textTransform: "initial", borderRadius: "25px", padding: "8px 10px", '&:hover': {backgroundColor: "#3F3F3F"}}}>
                    <DeleteForeverOutlinedIcon sx={{marginRight: "2px"}}/>
                    Clear all watch history
                </Button>
            </Grid>}
            {showClearBtn && 
            <Grid item xs={12}> 
                <Button sx={historyClear} onClick={handleDeleteHistory} >
                    <DeleteForeverOutlinedIcon sx={{marginRight: "2px"}}/>
                    Clear all watch history
                </Button>
            </Grid>
            }
        </Grid>
        <Button onClick={handleShowClearBtn} sx={moreBtn}> 
            <MoreVertTwoToneIcon sx={{fontSize: "1.8rem"}}/>
        </Button>
    </Box>
  )
}

export default History