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
  padding-block: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-content: center;
  gap: 18px;
`;
