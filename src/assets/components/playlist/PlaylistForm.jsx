import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';
import extractPlaylistId from '../../utils/extractUrl';

const AddPlaylist = ({handleClose, open}) => {
  const addPlaylistById = useStoreActions(action => action.fetchPlaylist)

  const [inputText, setInputText] = useState("")
  const handleChange = (value) => {
    setInputText(value)
  }
  const handleSubmit = () => {
    if(inputText === ""){
      alert("Enter valid url")
      return;
    }
    const playlistId = extractPlaylistId(inputText)
    addPlaylistById(playlistId)
    handleClose()
    setInputText("")
  }


  return (
    <div>
      <Dialog className='playlist-form' open={open} onClose={handleClose}>
        <Box sx={{background: "#2f2f2f"}}> 
          <DialogTitle sx={{color: "white"}}>Add Playlist</DialogTitle>
          <DialogContent >
            <DialogContentText sx={{color: "white"}}>
              To add playlist in your home page please enter here your playlist url or playlist id.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter playlist url..."
              type="text"
              fullWidth
              value={inputText}
              variant="standard"
              onChange={(e) => handleChange(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='error' onClick={handleClose}>Cancel</Button>
            <Button variant='contained' color='success' onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

export default AddPlaylist;