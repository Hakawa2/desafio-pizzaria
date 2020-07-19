import React, { useState } from "react";

import Form from "../../components/formContatos";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMensagem = (e) => {
    setMensagem(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (nome && email && mensagem) {
      window.alert("Sua mensagem foi enviada com sucesso");
    } else {
      window.alert("Ainda possui campos vazios");
    }
  };

  return (
    <Form
      nome={nome}
      email={email}
      mensagem={mensagem}
      handleNome={handleNome}
      handleEmail={handleEmail}
      handleMensagem={handleMensagem}
      onSubmit={onSubmit}
    />
  );
};

export default Contato;
