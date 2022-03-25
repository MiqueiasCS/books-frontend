import styled from "styled-components";
import backgroundimg from "../../assets/home.jpg";

export const Container = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    margin: 24px 0px;
    min-width: 288px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;

      img {
        width: 104px;
        height: 36px;
      }
      > p {
        font-weight: 300;
        font-size: 28px;
        margin-left: 16px;
      }
    }

    nav {
      .user {
        display: none;
      }
      svg {
        cursor: pointer;
      }
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    section {
      margin: 8px 0;
    }
  }
  footer {
    margin: 16px 0;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-weight: 400;
      font-size: 12px;
      color: #333333;
    }

    svg {
      font-size: 24px;
      color: rgb(51 51 51 / 50%);
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    header {
      width: 74%;

      nav {
        .user {
          display: initial;
          margin-right: 8px;
          font-weight: 400;
          font-size: 12px;
          color: #333333;
        }
      }
    }

    .cards {
      width: 90%;

      section {
        margin: 8px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1365px;
    margin: 0 auto;
    background-image: url(${backgroundimg});
    background-blend-mode: darken;

    header {
      width: 80%;
      max-width: 1136px;
    }

    .cards {
      width: 80%;
      max-width: 1136px;
      min-height: 512px;

      section {
        margin: 6px;
      }
    }
  }
`;
