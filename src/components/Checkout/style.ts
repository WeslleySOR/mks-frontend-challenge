import styled from "styled-components";

export const Checkout = styled.div<{ isOpenedCart: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #0f52ba;
  max-height: 100vh;
  width: 80%;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  bottom: 0;
  right: -80%;
  transition: transform 0.6s;
  transform: ${(props) =>
    props.isOpenedCart ? "translateX(-100%)" : "translateX(0)"};
  @media (min-width: 1024px) {
    width: 50%;
    right: -50%;
    transform: ${(props) =>
      props.isOpenedCart ? "translateX(-100%)" : "translateX(10%)"};
  }
  @media (min-width: 1440px) {
    width: 35%;
    right: -35%;
    transform: ${(props) =>
      props.isOpenedCart ? "translateX(-100%)" : "translateX(10%)"};
  }
`;

export const CheckoutHeader = styled.header`
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
  @media (min-width: 1440px) {
    padding: 30px;
    span {
      font-size: 27px;
      line-height: 33px;
    }
  }
`;

export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  padding-block: 15px;
  height: 100%;
  max-height: calc(100vh - 178px);
  overflow-y: auto;
  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

export const CheckoutFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

export const CloseCheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #000;
  color: #0f52ba;
  border: none;
  border-radius: 50%;
  padding: 12px;
  span {
    font-weight: 400;
    font-size: 24px;
    line-height: 15px;
    color: #0F52BA;
  }
  @media (min-width: 1024px) {
    span {
      font-weight: 400;
      font-size: 28px;
      color: #fff;
    }
  }
`;

export const CheckoutTotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 44px;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 7px;
    color: #fff;
  }
  @media (min-width: 1440px) {
    span {
      font-size: 24px;
      line-height: 15px;
    }
  }
`;

export const FinalizePurchaseButton = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: #000;
  border: none;
  padding: 26px 75px;
  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #fff;
  }
  @media (min-width: 1440px) {
    padding: 40px 75px;
    span {
      font-size: 24px;
      line-height: 15px;
    }
  }
`;
