import React from "react";
import { Modal, Button, Image, Row, Col } from "react-bootstrap";
import logo from "../../../assets/Assets_IB_logo.png";
import sanitizer from "../../../assets/file-20200417-152558-hxo9q0.jpg";

const ViewTaskModal = ({ show, onHide, todoItem }) => {
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <a className="navbar-brand">
            <img src={logo} alt="" width="32" height="30" />
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Row>
          <Col md={12} xs={12}>
            <Image src={sanitizer} fluid />
          </Col>
        </Row> */}
        <h4>Centered Modal</h4>

        <h6>
          <b>Description</b>
        </h6>
        <p>{todoItem}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewTaskModal;
