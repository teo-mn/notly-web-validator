import React from 'react';
import Modal from 'react-modal';

const AppModal = ({isOpen, closeModal, title, body, controls, style}) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={(typeof title === 'string') ? title : ''}
        shouldCloseOnOverlayClick={false}
        className="bc-modal-dialog bc-modal-dialog-centered bc-modal-dialog-scrollable"
        overlayClassName="bc-modal"
        appElement={document.getElementById('certify-validator')}
        ariaHideApp={false}
    >
      <div className="bc-modal-content" style={style}>
        <div className="bc-modal-body">
          {body}
        </div>
      </div>
    </Modal>
);

export default AppModal;
