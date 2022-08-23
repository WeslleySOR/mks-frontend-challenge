import styled from "styled-components";

export const Checkout = styled.div<{ isOpenedCart: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #0f52ba;
  width: 80%;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  bottom: 0;
  right: calc(-81%);
  transition: transform 0.6s;
  transform: ${(props) =>
    props.isOpenedCart ? "translateX(-100%)" : "translateX(0)"};
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #fff;
    }
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      border: none;
      border-radius: 50%;
    }
  }
  > main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    padding-block: 55px;
    > div {
      margin-top: auto;
      width: 100%;
      display: flex;
      justify-content: space-around;
      span {
        font-weight: 700;
        font-size: 18px;
        line-height: 7px;
        color: #fff;
      }
    }
  }
  > footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    background-color: #000;
    span {
      font-weight: 700;
      font-size: 20px;
      line-height: 15px;
      color: #fff;
      padding: 26px 75px;
    }
  }
`;
