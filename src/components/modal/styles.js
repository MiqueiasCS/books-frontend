import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000087;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  .close {
    margin-right: 5%;
    align-self: flex-end;

    svg {
      color: #ffffff;
      font-size: 24px;
      font-size: 32px;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const ContainerChild = styled.div`
  width: 288px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  overflow-y: scroll;

  .image {
    width: 240px;
    height: 351px;
    filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
    margin-bottom: 25px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .details-container {
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal_book-title {
    width: 100%;
    font-weight: 500;
    font-size: 28px;

    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .modal_book-author {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    color: #ab2680;
  }

  .modal_book-info {
    > div {
      display: flex;
      justify-content: space-between;

      p {
        width: 100px;

        font-weight: 500;
        font-size: 12px;
        line-height: 10px;
        text-transform: uppercase;

        color: #333333;
      }
      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        text-align: right;

        color: #999999;
      }
    }
  }

  .topic {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;

    color: #333333;

    margin: 16px 0;
  }

  p.modal_book-description {
    color: #999999;

    > svg {
      color: #999999;
      margin-right: 8px;
    }
    > span {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    .details-container {
      width: 320px;
      
    }
  }
  }

  @media (min-width: 1024px) {
    width: 769px;
    flex-direction: row;
    justify-content: space-evenly;
    height: 560px;

    .image {
      width: 349px;
      height: 512.29px;
      margin: 0;
    }

    .details-container {
      width: 320px;
      height: 512.29px;
    }
  }

  p.modal_book-description {
    height: 222px;
  }
`;
