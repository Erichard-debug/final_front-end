import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useForm";

const RegisterModal = ({
  handleCloseModal,
  handleAltClick,
  handleRegister,
  isLoading,
}) => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      buttonText={isLoading ? "Loading..." : "Sign Up"}
      altButtonText="Sign up"
      handleAltClick={handleAltClick}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <div className="modal__form-content">
        <label>
          <p className="modal__input-title">Email</p>
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={values.email}
            handleChange={handleChange}
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
            value={values.password}
            handleChange={handleChange}
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
            value={values.name}
            handleChange={handleChange}
          />
          <span className="modal__error">{errors.name}</span>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
