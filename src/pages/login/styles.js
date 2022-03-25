import styled from "styled-components";
import imgmob from "../../assets/mobile.jpg";
import imgdesk from "../../assets/desktop.jpg";

export const Container = styled.div`
  background-image: url(${imgmob});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  display: flex;
  align-items: center;

  div.content {
    margin-left: 3%;

    .header {
      width: 198px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 45px 0px;

      p {
        width: 77px;
        height: 40px;
        font-weight: 300;
        font-size: 28px;
        line-height: 40px;
        color: #ffffff;
      }
      .logo {
        width: 105px;
        height: 36px;
      }
    }
  }

  @media (min-width: 1024px) {
    background-image: url(${imgdesk});
    div.content {
      margin-left: 10%;
    }
  }
`;

export const Form = styled.form`
  width: 288px;
  height: 224px;

  .login {
    width: 288px;
    height: 60px;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    margin: 16px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-login {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 240px;

    label {
      width: 259px;
      height: 16px;
      opacity: 0.5;
      color: #ffffff;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
    input {
      background-color: transparent;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      width: 259px;
      height: 24px;
      border: none;
    }
  }
  .input-login_enter {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .input-login {
      label {
        width: 158px;
      }
      input {
        width: 158px;
      }
    }
    button {
      width: 85px;
      height: 36px;
      background: #ffffff;
      border-radius: 44px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #b22e6f;
    }
  }

  @media (min-width: 1024px) {
    .login {
      width: 368px;
      height: 60px;
      background: rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(2px);
      border-radius: 4px;
      margin: 16px 0px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .input_email {
      width: 300px;
    }
    .input-login_enter {
      width: 300px;
    }
  }
`;
