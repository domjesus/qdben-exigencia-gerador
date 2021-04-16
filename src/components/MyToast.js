import React from "react"
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyToast = (props) => {
const {toast} = props;

  return <Snackbar open={toast.show} 
    onClose={() => props.closeToast()}    
    anchorOrigin={{vertical:'bottom',horizontal:'center' }}
    autoHideDuration={5000}
    >
      <Alert severity={toast.severity}>{toast.body}</Alert>      

  </Snackbar>
  }

export default MyToast