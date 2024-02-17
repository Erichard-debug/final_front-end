import "./SuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SuccessModal = ({ handleCloseModal, handleAltClick }) => {
  return (
    <ModalWithForm title="Success!" onClose={handleCloseModal}>
      <h3 className="modal__title-success">
        Registration successfully completed!
      </h3>
      <button className="modal__button-success" onClick={handleAltClick}>
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default SuccessModal;
