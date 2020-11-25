import React, { useState } from "react";

import "./styles.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { AiFillStar } from "react-icons/ai";

const RateModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="rating-button">
      <Button variant="primary" onClick={handleShow}>
        Avaliar Receita
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Avaliar Receita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="star-widget">
            <input type="radio" name="rate" id="rate-5" />
            <label htmlFor="rate-5">
              <AiFillStar size={50} />
            </label>

            <input type="radio" name="rate" id="rate-4" />
            <label htmlFor="rate-4">
              <AiFillStar size={50} />
            </label>

            <input type="radio" name="rate" id="rate-3" />
            <label htmlFor="rate-3">
              <AiFillStar size={50} />
            </label>

            <input type="radio" name="rate" id="rate-2" />
            <label htmlFor="rate-2">
              <AiFillStar size={50} />
            </label>

            <input type="radio" name="rate" id="rate-1" />
            <label htmlFor="rate-1">
              <AiFillStar size={50} />
            </label>

            <form action="#">
              <header></header>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "red" }} onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleClose}>Avaliar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RateModal;
