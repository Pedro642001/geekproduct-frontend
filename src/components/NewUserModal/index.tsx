import Modal from "react-modal";
import {Container} from "./style"
import closeImg from "../../assets/images/icon-close.svg"
interface NewUserProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({isOpen, onRequestClose}: NewUserProps) {
  return (
    <>
     <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" className="react-modal-close">
          <img src={closeImg} alt="fechar modal" onClick={onRequestClose} />
        </button>
        
        <Container>
          <h2>Cadastre-se</h2>
          <input type="text" placeholder="Nome completo" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
      
    </>
  );
}