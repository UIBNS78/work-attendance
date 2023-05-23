import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

export default function SimpleSnackbar(props) {
  const [state, setState] = React.useState({
    open: false,
    type: "info",
    message: null,
  });

  React.useEffect(() => {
    setState({ ...props });
  }, [props]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({
      ...state,
      open: false,
    });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={state.open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          severity={state.type}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
