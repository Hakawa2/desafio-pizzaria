import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
`;

Container.Scroll = styled.div`
  width: ${(props) => (props.style ? "80%" : "92%")};
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

Container.Title = styled.h1`
  color: #bc0303;
  font-size: 38px;
  font-weight: Bold;
`;

export const Card = styled.div`
  background: #ffffff padding-box;
  border-radius: 20px 20px 0px 0px;
  width: ${(props) => (!props.anuncio ? "250px" : "250px")};
  min-height: ${(props) => (!props.anuncio ? "450px" : "150px")};
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: ${(props) => (props.anuncio ? "10px" : "0 10px")};
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.anuncio ? "box-shadow: 5px -1px 12px -2px rgba(0,0,0,0.16);" : ""}

  ${(props) =>
    !props.anuncio &&
    `$:hover {
    position: relative
    border-radius: 0;
  }`}
`;

Card.Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 20px 20px 0px 0px;

  ${(props) =>
    !props.anuncio &&
    `$:hover {
    position: relative
    border-radius: 0;
  }`}
`;

Card.Title = styled.h1`
  color: #466824;
  font-size: 24px;
  margin: 0;
`;

Card.Preco = styled.h3`
  color: #466824;
  font-size: 18px;
  margin-top: auto;
  margin-bottom: 0;
`;

Card.Adicionar = styled.h3`
  color: #bc0303;
  font-size: 18px;
  margin: 0;
`;

Card.Lista = styled.ul`
  padding: 0;
  margin-left: 30px;
`;

Card.Lista.Item = styled.li`
  width: 100%;
  text-align: left;
  color: #466824;
  font-weight: 700;
  margin: 10px 0;
`;

Card.Desabilitado = styled.div`
  background: #575353d6 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0px 0px;
  position: absolute;
  width: 250px;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: #fff;
  font-weight: bold;

  :hover {
    border-radius: 0;
  }
`;

export const Arrow = styled.img`
  width: 35px;
`;
