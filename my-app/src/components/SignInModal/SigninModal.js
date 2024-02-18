import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useForm";

const SignInModal = ({
    handleCloseModal,
    handleSignIn,
    handleAltClick,
    isLoading,
    serverError,
  }) => {
    const { values, errors, isValid, handleChange} =
      useFormWithValidation({ email: "", password: "" });
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      handleSignIn(values);
    };
  
    return (
      <ModalWithForm
        title="Sign in"
        onClose={handleCloseModal}
        buttonText={isLoading ? "Loading..." : "Sign in"}
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
              placeholder="Email"
              minLength="1"
              required
              value={values.email}
              onChange={handleChange}
            />
            <span className="modal__error">
              {errors.email} {""}
            </span>
          </label>
  
          <label>
            <p className="modal__input-title">Password</p>
            <input
              className="modal__input"
              type="password"
              name="password"
              placeholder="Password"
              minLength="1"
              required
              value={values.password}
              onChange={handleChange}
            />
            <span className="modal__error">{errors.password}</span>
          </label>
          {serverError && (
            <span className="modal__error-unavailable">
              Incorrect email or password
            </span>
          )}
        </div>
      </ModalWithForm>
    );
  };
  
  export default SignInModal;