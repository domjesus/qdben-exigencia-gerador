import { Box, Button, Dialog, DialogTitle, IconButton, Typography } from "@material-ui/core";

import React from "react";

const MyModal = (props) => (
  <Box m={2}>
    <Dialog open={props.show} onClose={() => props.closeModal()}>
      <DialogTitle id="simple-dialog-title">
        Colar texto do GET
      </DialogTitle>

      <Box m={2}>
        <Typography>
          Dentro do detalhamento de uma tarefa no GET, tecle Ctrl+a (para selecionar todo o texto) e cole abaixo
        </Typography>
        <textarea rows="5" style={{ width: "100%" }} id="texto-to-past" onKeyUp={(e) => props.trataTexto(e)}></textarea>
      </Box>

      <Box m={2} style={{"float":"right"}}>
        <Button variant="contained" color="primary" onClick={() => props.closeModal()}>
          Fechar
        </Button>
      </Box>
    </Dialog>
  </Box>
);

export default MyModal;
