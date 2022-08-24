import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
  padding: 22px 16px;
  height: 190px;
  width: 230px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 115px;
    width: 85%;
  }
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
  @media (min-width: 1024px) {
    flex-direction: row;
    span {
      font-size: 13px;
      line-height: 17px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
`;

export const ProductNextImage = styled.div`
  position: relative;
  height: 75px;
  width: 60px;
  @media (min-width: 1024px) {
    height: 96px;
    width: 84px;
  }
`;

export const CustomInput = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  background-color: #fff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  span {
    &:first-of-type {
      position: absolute;
      top: -10px;
      left: 0;
      font-weight: 400;
      font-size: 10px;
      line-height: 6px;
    }
  }
`;

export const CustomInputSpan = styled.span`
  position: relative;
  padding: 11px 5px;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #000;
  &::before {
    position: absolute;
    content: "";
    top: 7.5px;
    left: -10px;
    width: 0.5px;
    height: calc(100% - 15px);
    background-color: #bfbfbf;
  }
  &::after {
    position: absolute;
    content: "";
    top: 7.5px;
    right: -10px;
    width: 0.5px;
    height: calc(100% - 15px);
    background-color: #bfbfbf;
  }
  @media (min-width: 1024px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }
`;

export const CustomInputButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000;
`;

export const ProductTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #000;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 8px;
    line-height: 8px;
    padding: 17px 8px;
  }
  @media (min-width: 1024px) {
    background: none;
    span {
      color: #000;
      font-size: 14px;
      line-height: 17px;
      padding: 39px 5px;
    }
  }
`;

export const ProductRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  span {
    font-weight: 400;
    font-size: 21px;
    line-height: 17px;
  }
  @media (min-width: 1024px) {
    top: -14px;
    right: -14px;
    background: #000;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
  }
`;
