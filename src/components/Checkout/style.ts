import styled from "styled-components";

export const Checkout = styled.div<{ isOpenedCart: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #0F52BA;
  width: 80%;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  bottom: 0;
  right: calc(-81%);
  transition: transform 0.6s;
  transform: ${(props) => (props.isOpenedCart ? 'translateX(-100%)' : "translateX(0)")};
  > header {
    display: flex;
    justify-content: space-between;
    padding: 35px;
    span {
      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
      color: #fff;
    }
    button {
      height: fit-content;
      width: fit-content;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    padding-block: 55px;
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