import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 344px;
  width: 250px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-inline: 60px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 8px;
  > span {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2c2c2c;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  span {
    color: #2c2c2c;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373737;
  border-radius: 5px;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    padding: 11px 5px;
  }
`;

export const Footer = styled.button`
  cursor: pointer;
  background-color: #0f52ba;
  color: #fff;
  border-radius: 0px 0px 8px 8px;
  padding-block: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: none;
  width: 100%;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;
