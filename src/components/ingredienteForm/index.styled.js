import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  width: 60%;
  min-height: 400px;
  margin: 50px auto 0 auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 90%;
  }
`;

Container.Text = styled.h1`
  color: #bc0303;
  font-size: 38px;
`;

Container.Oferta = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justyfi-content: center;
    align-items: center;
  }
`;

Container.Form = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

Container.Form.Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

Container.Form.Lista.Item = styled.label`
  display: flex;
  cursor: pointer;
  margin: 15px 0;
`;

Container.Form.Lista.Item.Text = styled.h1`
  font-size: 18px;
  margin: 0 0 10px 5px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

Container.Form.Lista.Item.Input = styled.input``;

Container.Form.Button = styled.button`
  border: 1px solid #bc0303;
  background-color: #bc0303;
  border-radius: 20px;
  height: 40px;
  width: 60%;
  margin: 20px 0;
  cursor: pointer;
  font-weight: bold;
  color: #fff;

  :hover {
    background-color: #700303;
  }

  :disabled {
    background-color: #4f0e0e;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
