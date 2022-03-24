import styled from "styled-components";

export const Container = styled.div`
  width: 239px;
  height: 48px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 207px;
    height: 16px;

    font-family: "Heebo";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
  }
`;
