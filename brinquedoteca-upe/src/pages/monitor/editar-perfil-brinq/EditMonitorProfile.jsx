import React, { useState } from 'react';

const EditMonitorProfile = () => {
  const [formData, setFormData] = useState({
    nome: 'Beltrano dos Santos',
    cep: 'XXXXX-XXX',
    rua: 'Rua Bonita',
    numero: '100',
    bairro: 'Bairro Legal',
    email: 'beltranasantos@upe.br',
    telefone: '(XX) XXXXX-XXXX',
    cpf: 'XXX.XXX.XXX-XX',
    curso: 'Pedagogia'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Dados salvos', formData);
  };

  return (
    <div className="perfil-container">
      <h2>Perfil do Brinquedista</h2>
      <form>
        <label>Nome completo:</label>
        <input type="text" name="cep" value={formData.cep} onChange={handleChange} />

        <label>CEP:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />

        <label>Rua:</label>
        <input type="text" name="rua" value={formData.rua} onChange={handleChange} />

        <div className="form-row">
          <div>
            <label>Número:</label>
            <input type="text" name="numero" value={formData.numero} onChange={handleChange} />
          </div>
          <div>
            <label>Bairro:</label>
            <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} />
          </div>
        </div>

        <label>E-mail:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Telefone para contato:</label>
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />

        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />

        <label>Curso:</label>
        <input type="text" name="curso" value={formData.curso} onChange={handleChange} />

        <button type="button" onClick={handleSave}>Salvar</button>
      </form>

      <a href="/homemonitor">Voltar para Home?</a>
    </div>
  );
};

export default EditMonitorProfile;