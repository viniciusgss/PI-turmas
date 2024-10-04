//import { Link } from "react-router-dom";
import { 
  Header,
  Footer,
} from '../src/imports/imports'; 



import '../src/css/App.css';

function Turma() {
  return (

    
    <main className="Turma">
     <Header />
     
      {/* Espaçamento entre Header e Conteúdo */}
      <section className="turmas-content">
        <div className="turmas-header">
          <h2 className="turmas-title">
            <span className="turmas-icon">▶</span> Turmas
          </h2>
          <button className="add-turma-button">+</button>
        </div>

        {/* Cards das turmas */}
        <div className="turmas-grid">
          <div className="turma-card">
            <div className="turma-card-header">
              <img src="path-to-avatar" alt="Avatar" className="turma-avatar" />
              <div>
                <h3>Turma: 1 Ano</h3>
                <p>Turno: Tarde</p>
              </div>
            </div>
            <div className="turma-card-content">
              <h4>Ux Design</h4>
              <p>23/09 - Arquivo em PDF</p>
            </div>
            <div className="turma-card-footer">
              <p>40 pessoas</p>
              <p>Professor: Marcos Silva</p>
            </div>
          </div>

          {/* Replicando os outros dois cards */}
          <div className="turma-card">
            <div className="turma-card-header">
              <img src="path-to-avatar" alt="Avatar" className="turma-avatar" />
              <div>
                <h3>Turma: 1 Ano</h3>
                <p>Turno: Tarde</p>
              </div>
            </div>
            <div className="turma-card-content">
              <h4>Ux Design</h4>
              <p>23/09 - Arquivo em PDF</p>
            </div>
            <div className="turma-card-footer">
              <p>40 pessoas</p>
              <p>Professor: Marcos Silva</p>
            </div>
          </div>

          <div className="turma-card">
            <div className="turma-card-header">
              <img src="path-to-avatar" alt="Avatar" className="turma-avatar" />
              <div>
                <h3>Turma: 1 Ano</h3>
                <p>Turno: Tarde</p>
              </div>
            </div>
            <div className="turma-card-content">
              <h4>Ux Design</h4>
              <p>23/09 - Arquivo em PDF</p>
            </div>
            <div className="turma-card-footer">
              <p>40 pessoas</p>
              <p>Professor: Marcos Silva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
export default Turma;