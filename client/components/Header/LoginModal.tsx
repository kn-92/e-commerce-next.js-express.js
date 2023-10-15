import "./LoginModal.scss";
import { LoginModalProps } from "./types";

const LoginModal = ({ modalVisible, setVisible }: LoginModalProps) => {
  const loginModalClasses = modalVisible
    ? "login-modal"
    : "login-modal-invisible";

  return (
    <div
      className={loginModalClasses}
      onClick={(e) => {
        setVisible(e);
      }}
    >
      <div className="modal-box"></div>
    </div>
  );
};

export default LoginModal;
