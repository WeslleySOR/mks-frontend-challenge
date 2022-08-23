import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Main = styled.main`
  max-height: 100vh;
  overflow-y: auto;
  padding-block: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-content: center;
  gap: 18px;
`;

export const Cart = styled.div<{ isOpenedCart: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #0F52BA;
  width: 80%;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  transition: transform 0.6s;
  /* transform: ${(props) => (props.isOpenedCart ? 'translateX(0)' : "translateX(100%)")}; */
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
  footer {
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
