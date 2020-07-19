import React from "react";
import PropTypes from "prop-types";
import { Container } from "./index.styled";

const Form = ({
  nome,
  email,
  mensagem,
  handleNome,
  handleEmail,
  handleMensagem,
  onSubmit,
}) => {
  return (
    <Container>
      <Container.Info>
        <Container.Info.Item>
          <Container.Info.Item.Text>
            Telefone: (99) 99999-9999
          </Container.Info.Item.Text>
          <Container.Info.Item.Text>
            Telefone: (99) 99999-9999
          </Container.Info.Item.Text>
          <Container.Info.Item.Text>
            Email: sdadsa@dsadsa.com
          </Container.Info.Item.Text>
          <Container.Info.Item.Text>
            Horário de funcionamento:
          </Container.Info.Item.Text>
          <Container.Info.Item.Text.SubInfo>
            seg a dom: 18:30 - 03:00
          </Container.Info.Item.Text.SubInfo>
        </Container.Info.Item>
        <Container.Local>
          <Container.Local.Text>Localização</Container.Local.Text>
          <Container.Local.Text.SubInfo>
            Rua: teste sadasd, 656
          </Container.Local.Text.SubInfo>
          <Container.Local.Text.SubInfo>
            SP/CAMPINAS
          </Container.Local.Text.SubInfo>
        </Container.Local>
      </Container.Info>
      <Container.Form onSubmit={onSubmit}>
        <Container.Form.Text>Entre em contato conosco</Container.Form.Text>
        <Container.Form.Campos>
          <Container.Form.Campo>
            <Container.Form.Campo.Label>Nome:</Container.Form.Campo.Label>
            <Container.Form.Campo.Input
              name="nome"
              placeholder="Nome"
              value={nome}
              onChange={handleNome}
            />
          </Container.Form.Campo>
          <Container.Form.Campo>
            <Container.Form.Campo.Label>Email:</Container.Form.Campo.Label>
            <Container.Form.Campo.Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </Container.Form.Campo>
          <Container.Form.Campo>
            <Container.Form.Campo.Label>Mensagem:</Container.Form.Campo.Label>
            <Container.Form.Campo.TextArea
              name="mensagem"
              placeholder="Mensagem"
              value={mensagem}
              onChange={handleMensagem}
            />
          </Container.Form.Campo>
        </Container.Form.Campos>
        <Container.Form.Button type="submit">
          ENVIAR MENSAGEM
        </Container.Form.Button>
      </Container.Form>
    </Container>
  );
};

Form.propTypes = {
  nome: PropTypes.string,
  email: PropTypes.string,
  mensagem: PropTypes.string,
  handleNome: PropTypes.func,
  handleEmail: PropTypes.func,
  handleMensagem: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
