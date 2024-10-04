import { Link } from "react-router-dom";
import { 
    logo, 
    perfil
  } from './imports/imports'; 

function Boletim() {
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
      
    <nav className='nav-home'>
      <img src={perfil} className="perfil-icon" alt="perfil-icon"/> 
      <div className="opcao-login">
        <a href="#a" id="portalLogin">Portal do aluno</a>
        <Link to="/boletim" id="acessar">Acesse sua conta</Link>
      </div>
    </nav>
  </header>
  );
}

export default Boletim;