import styled from "styled-components";
import BackgroundImg from "../../assets/images/bgImage.png";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${BackgroundImg});
  background-size: cover;
  gap: 40px;
  height: 100%;
  min-height: 120vh;
`;

export const ImgPeoples = styled.img`
  width: 307.96px;
  height: 99.47px;
  margin-top: 30px;
`;

export const Label = styled.label`
  font-weight: ${themes.fontWeight.normal};
  font-size: ${themes.fontSize.lg};
  line-height: 22px;
  letter-spacing: -0.408px;
  color: ${themes.colors.gray_400};
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
  font-weight: ${themes.fontWeight.bold};
  font-size: ${themes.fontSize["2xl"]};
  line-height: 28px;
  color: ${themes.colors.white};
  margin-bottom: 34px;
`;

export const Arrow = styled.img`
  transform: rotate(180deg);
  margin-right: 12px;
  
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
  font-weight: ${themes.fontWeight.normal};
  font-size: ${themes.fontSize.md};
  line-height: 28px;
  color: ${themes.colors.white};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  margin-bottom: 15px;
`;

export const User = styled.li`
  width: 342px;
  height: 58px;
  color: ${themes.colors.white};
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: ${themes.fontWeight.normal};
  font-size: ${themes.fontSize["2xl"]};
  line-height: 28px;
  color: ${themes.colors.white};
  outline: none;
  border: none;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  margin-top: 5px;
  margin: 28px 0 28px 0;
`;
