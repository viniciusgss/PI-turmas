import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { Header, Footer } from '../src/imports/imports';
import '../src/css/App.css';

function Turma() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="Turma">
      <Header />

      {/* Espaçamento entre Header e Conteúdo */}
      <section className="turmas-content">
        <div className="turmas-header">
          <h2 className="turmas-title">
            <span className="turmas-icon">▶</span> Turmas
          </h2>
          <button className="add-turma-button" onClick={openModal}>+</button>
        </div>

        {/* Cards das turmas */}
        <div className="turmas-grid">
          {/* Exemplo de card repetido */}
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

          {/* Outros cards... */}
        </div>
      </section>

      {/* Modal para adicionar turma */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Adicionar Turma</h3>
            <form action='' method='post'>
              <label>Nome da Turma:</label>
              <input type="text" placeholder="Nome da turma" />

              <label>Código da Turma:</label>
              <input type="text" placeholder="Código da turma" />

              <label>Matéria:</label>
              <input type="text" placeholder="Matéria" />

              <label>Turma:</label>
              <input type="text" placeholder="Turma" />

              <label>Sala:</label>
              <input type="text" placeholder="Sala" />

              <label>Professor:</label>
              <input type="text" placeholder="Professor" />

              <div className="modal-buttons">
                <button type="submit">Adicionar</button>
                <button type="button" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default Turma;
