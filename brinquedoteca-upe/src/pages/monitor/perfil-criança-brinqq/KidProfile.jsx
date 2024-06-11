import React from 'react';
import axios from 'axios';
import './KidProfile.css'

const KidProfile = () => {
  return (
    <div className="container">
      <header>
        <img src="logo.png" alt="Brinquedoteca" />
      </header>

      <form>
        <section className="perfil-crianca">
          <h2>Perfil da Criança</h2>
          <div className="form-group">
            <label>Nome completo:</label>
            <input type="text" placeholder="Digite o nome completo..." />
          </div>
          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input type="text" placeholder="DD/MM/AAAA" />
          </div>
          <div className="form-group">
            <label>Observações:</label>
            <input type="text" placeholder="Alergias, medos, etc..." />
          </div>
          <div className="form-group">
            <label>Descrição:</label>
            <textarea placeholder="----"></textarea>
          </div>
        </section>

        <section className="responsavel">
          <h2>Responsável</h2>
          <div className="form-group">
            <label>Nome Completo:</label>
            <input type="text" placeholder="Fulano da Silva" />
          </div>
          <div className="form-group">
            <label>CEP:</label>
            <input type="text" placeholder="XXXXX-XXX" />
          </div>
          <div className="form-group">
            <label>Rua:</label>
            <input type="text" placeholder="Rua dos Tal" />
          </div>
          <div className="form-group">
            <label>Número:</label>
            <input type="text" placeholder="13"/>
          </div>
          <div className="form-group">
            <label>Bairro:</label>
            <input type="" placeholder="Nome do Bairro" />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" placeholder="seuemail@email.com" />
          </div>
          <div className="form-group">
            <label>Telefone para contato:</label>
            <input type="text" placeholder="(XX) XXXXX-XXXX" />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" placeholder="XXX.XXX.XXX-XX" />
          </div>
        </section>
        <button type="button">Voltar</button>
      </form>
    </div>
  );
};

export default KidProfile;