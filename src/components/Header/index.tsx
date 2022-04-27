import { Container } from "./styles";

interface HeaderProps{
    onOpenNewUserModal: () => void;
}
export function Header({onOpenNewUserModal}: HeaderProps){
    return(
            <Container>
                <button  onClick={onOpenNewUserModal} >Cadastro</button>
                <p>Login</p>
                <p>Catálogo</p>
                <p>Perfil</p>
          
            </Container>
    )
}