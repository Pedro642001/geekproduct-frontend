import { Header } from "./components/Header";
import { GlobalStyle } from "./assets/styles/global"
import { ProductCatalog } from "./components/productCatalog";
import Modal from "react-modal";
import { useState } from "react";
import { NewUserModal } from "./components/NewUserModal";

Modal.setAppElement("#root")

export function App() {
  const [isCreateNewUserModalOpen,setIsCreateNewUserModalOpen] = useState(false)

  function handleOpenNewUserModal() {
      setIsCreateNewUserModalOpen(true)
  }

  function handleCloseNewUserModal() {
      setIsCreateNewUserModalOpen(false)
  }

  return (
    <>

      <Header onOpenNewUserModal={handleOpenNewUserModal}/>
      <NewUserModal isOpen={isCreateNewUserModalOpen} onRequestClose={handleCloseNewUserModal} ></NewUserModal>
      <ProductCatalog/>
      <GlobalStyle />
    </>
  );
}