import styled from "styled-components";
import BackgroundImg from "../assets/imgs/background1.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${BackgroundImg});
  background-size: cover;
  gap: 40px;
  height: 100vh;
`;

export const ImgPeoples = styled.img`
  width: 328.92px;
  height: 176.26px;
  margin-top: 30px;
`;

export const Containerinformations = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
  height: 645px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  height: 100vh;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin: 50px 0 103px 0;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 27px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 34px;
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  &:hover{
     opacity: 0.8;
  }
`;

export const Arrow = styled.img`
    width: 22.95px;
    height: 18.93px;
    margin-left: 14px;
`;
