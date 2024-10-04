import { Link } from "react-router-dom";
import {
    logo,
    perfil
} from '../../imports/imports';
import '../header/header.css';

export default function Header() {

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
          <i className="fas fa-bell notification-icon"></i>
        </div>
      </nav>
    </header>
  )
}
