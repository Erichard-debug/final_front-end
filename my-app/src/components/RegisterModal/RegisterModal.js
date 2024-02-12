import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({handleCloseModal}) => {
    console.log("RegisterModal");
  
    return (
        <ModalWithForm title="Sign Up" onClose={handleCloseModal}>
        <div className="modal__form-content">
          <label>
            <p className="modal__input-title">Email</p>
            <input
              className="modal__input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </label>

          <label>
            <p className="modal__input-title"> Password</p>
            <input
              className="modal__input"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </label>

          <label>
            <p className="modal__input-title">Name</p>
            <input
              className="modal__input"
              type="text"
              name="name"
              minLength="1"
              maxLength="100"
              placeholder="Enter Your Username"
              required
            />
          </label>
        </div>
      </ModalWithForm>
    );
  };
  
  export default RegisterModal;