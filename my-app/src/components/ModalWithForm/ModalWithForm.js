import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  handleAltClick,
  altButtonText,
}) => {
  return (
    <div className={`modal modal__type${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__header">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button
            className={`modal__submit-button ${
              isDisabled === true ? "modal__submit-button_disabled" : ""
            }`}
            type="submit"
            disabled={isDisabled}
          >
            {buttonText}
          </button>
          <p className="modal__text">
            or{" "}
            <button className="modal__button-alt" onClick={handleAltClick}>
              {altButtonText}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
