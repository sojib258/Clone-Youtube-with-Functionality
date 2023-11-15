import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DescriptionDialog = ({open, handleClose, description}) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{color: "#fff"}}>
          Description
        </DialogTitle>
        <DialogContent>
          <DialogContentText  sx={{color: "#ddd"}} id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DescriptionDialog