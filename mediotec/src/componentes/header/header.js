import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    logo,
    perfil
} from '../../imports/imports';
import '../header/header.css';

export default function Header() {
  // Estado para controlar a exibição do modal de notificação
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  // Funções para abrir e fechar o modal
  const openNotificationModal = () => {
    setShowNotificationModal(true);
  };

  const closeNotificationModal = () => {
    setShowNotificationModal(false);
  };

  return(
    <header className="App-header">
      {/* Logo */}
      <img src={logo} className="App-logo" alt="logo" />
      
      {/* Menu de Navegação */}
      <nav className='nav-home'>
        {/* Ícone de Menu de Pesquisa (3 tracinhos) */}
        <div className="icon-container">
          <i className="fas fa-bars menu-icon"></i>
        </div>

        {/* Ícone de Perfil e Login */}
        <img src={perfil} className="perfil-icon" alt="perfil-icon"/> 
        <div className="opcao-login">
          <a href="#a" id="portalLogin">Portal do aluno</a>
          <Link to="/boletim" id="acessar">Acesse sua conta</Link>
        </div>

        {/* Sino de Notificações */}
        <div className="icon-container">
          <i className="fas fa-bell notification-icon" onClick={openNotificationModal}></i>
        </div>

        {/* Modal para criar notificação */}
        {showNotificationModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Criar Notificação</h3>
              <form action='' method='post'>
                <label>Nome do Evento:</label>
                <input type="text" placeholder="Nome do evento" />

                <label>Descrição:</label>
                <input type="text" placeholder="Descrição do evento" />

                <label>Importância:</label>
                <select>
                  <option value="alta">Alta</option>
                  <option value="media">Média</option>
                  <option value="baixa">Baixa</option>
                </select>

                <div className="modal-buttons">
                  <button type="submit">Criar</button>
                  <button type="button" onClick={closeNotificationModal}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
