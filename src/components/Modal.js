import React from "react";
import {Button, Modal } from "react-bootstrap";

const MyModal = (props) => (
  <Modal show={props.show} size="lg" onHide={() => props.closeModal()}>
    <Modal.Header closeButton>
      <Modal.Title>Colar do GET</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Dentro do detalhamento de uma tarefa no GET, tecle Ctrl+a (para selecionar todo o texto) e cole abaixo</p>      
      <textarea rows='5' style={{'width':'100%'}} id="texto-to-past" onKeyUp={(e) => props.trataTexto(e)}></textarea>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={() => props.closeModal()}>Fechar</Button>      
    </Modal.Footer>
  </Modal>
);

export default MyModal;
