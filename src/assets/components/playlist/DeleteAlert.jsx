import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DeleteAlert = ({open, handleClose, handleDeletePlaylist}) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent sx={{backgroundColor: "#1e1e1e"}}>
            <Box sx={{textAlign: "center", color: "yellow", padding: "0px"}}>
                <ErrorOutlineRoundedIcon sx={{fontSize: "3rem"}}/>
            </Box>
            <DialogTitle sx={{textAlign: "center", color: "#fff"}}>
                Are You Sure?
            </DialogTitle>
          <DialogContentText sx={{color: "#ddd", textAlign: "center"}}>
            Do you really want to delete these item? This process cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor: "#1e1e1e"}}>
          <Button variant='contained' color='success' onClick={handleClose} autoFocus>
            Cancel  
          </Button>
          <Button color='error' variant='contained' onClick={handleDeletePlaylist} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteAlert