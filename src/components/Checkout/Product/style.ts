import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 22px 16px;
  height: 190px;
  width: 230px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #2c2c2c;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
`;

export const CustomInput = styled.div`
  display: flex;
  gap: 20px;
  background-color: #fff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  button {
    background: none;
    border: none;
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #000;
  }
  span {
    padding: 11px;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #000;
  }
`;

export const ProductTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373737;
  border-radius: 5px;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 8px;
    line-height: 8px;
    padding: 17px 8px;
  }
`;
