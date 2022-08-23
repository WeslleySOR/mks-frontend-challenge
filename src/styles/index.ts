import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Main = styled.main`
  max-height: calc(100vh - 85px);
  overflow-y: auto;
  padding-block: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-content: center;
  gap: 18px;
`;
