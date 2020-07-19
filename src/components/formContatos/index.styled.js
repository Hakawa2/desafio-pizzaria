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

Container.Info = styled.ul`
  width: 40%;
  list-style: none;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

Container.Info.Item = styled.li``;

Container.Info.Item.Text = styled.h3`
  color: #bc0303;
  font: 20px;
  margin-bottom: 5px;
`;

Container.Info.Item.Text.SubInfo = styled.h4`
  color: #bc0303;
  font: 18px;
  margin: 0 30px;
`;

Container.Local = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

Container.Local.Text = styled.h3`
  color: #bc0303;
  font: 20px;
  margin-bottom: 5px;
`;

Container.Local.Text.SubInfo = styled.h4`
  color: #bc0303;
  font: 18px;
  margin: 0 30px;
`;

Container.Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

Container.Form.Text = styled.h3`
  color: #bc0303;
  font: 20px;
  margin-bottom: 5px;
`;

Container.Form.Campos = styled.ul`
  width: 80%;
  list-style: none;
`;

Container.Form.Campo = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
`;

Container.Form.Campo.Label = styled.h4`
  color: #bc0303;
  font: 18px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

Container.Form.Campo.Input = styled.input`
  border: 1px solid #bc0303;
  border-radius: 20px;
  height: 30px;
  width: 80%;
  padding: 0 10px;
`;

Container.Form.Campo.TextArea = styled.textarea`
  border: 1px solid #bc0303;
  border-radius: 20px;
  height: 100px;
  width: 80%;
  padding: 10px;
`;

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
`;
