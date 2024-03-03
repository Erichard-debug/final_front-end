import "./SuccessModal.css";
import Modal from "../Modal/Modal";

const SuccessModal = ({ handleCloseModal, handleAltClick }) => {
  return (
    <Modal title="Success!" onClose={handleCloseModal}>
      <h3 className="modal__title-success">
        Registration successfully completed!
      </h3>
      <button className="modal__button-success" onClick={handleAltClick}>
        Sign in
      </button>
    </Modal>
  );
};

export default SuccessModal;
