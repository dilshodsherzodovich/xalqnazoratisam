import ReactModal from "react-modal";
import AuthForm from "./components/AuthForm";

ReactModal.setAppElement("#root");

const AuthModal = ({ isAuthOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isAuthOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={"z-10"}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <AuthForm closeModal={closeModal} />
    </ReactModal>
  );
};

export default AuthModal;
