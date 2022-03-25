import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000087;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  svg {
    position: absolute;
    right: 5%;
    top: 3.52%;
    bottom: 95.43%;
    color: #ffffff;
    font-size: 24px;
  }
`;

export const ContainerChild = styled.div`
  position: absolute;
  width: 288px;
  height: 970px;
  left: 16px;
  top: 64px;
  background: #ffffff;
  border-radius: 4px;
`;
