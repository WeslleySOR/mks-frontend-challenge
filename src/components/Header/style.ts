import styled from "styled-components";

export const Container = styled.header`
  height: 48px;
  background-color: #0f52ba;
  padding: 4px 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  span {
    line-height: 19px;
    color: #fff;
    &:first-of-type {
      font-weight: 600;
      font-size: 32px;
    }
    &:last-of-type {
      font-weight: 300;
      font-size: 16px;
    }
  }
`

export const Cart = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding: 6px 8px;
  margin-left: auto;
  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #000;
  }
`