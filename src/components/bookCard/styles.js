import styled from "styled-components";

export const Container = styled.section`
  width: 288px;
  height: 160px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  display: flex;
  align-items: center;

  .image {
    padding: 0px 10px;

    img {
      width: 81px;
      height: 122px;
      filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
    }
  }

  @media (min-width: 1024px) {
    width: 272px;
    height: 160px;
  }
`;

export const Info = styled.div`
  width: 170px;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .book-title-author {
  }
  .book_title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .book_author {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #ab2680;
  }

  .book-other-info {
    width: 104px;

    p {
      font-weight: 400;
      font-size: 10px;

      color: #999999;
    }
  }

  @media (min-width: 1024px) {
    .book-other-info {
      p {
        font-size: 11px;
      }
    }
  }
`;
