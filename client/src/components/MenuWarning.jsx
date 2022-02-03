import React from "react";
import Modal from "react-bootstrap/Modal";

export const MenuWarning = ({ modal, setModal, veg }) => {
  const handleClose = () => {
    setModal(false);
  };

  return (
    <Modal
      show={modal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-danger ">Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {veg ? (
          <div className="form-floating mb-3 fs-5">
            <p className="m-0">
              You already have 2 vegetarian plates on the menu!
            </p>
            <p>please remove one to add another.</p>
          </div>
        ) : (
          <div className="form-floating mb-3 fs-5">
            <p className="m-0">You already have 4 plates on the menu!</p>
            <p>please remove one to add another.</p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
