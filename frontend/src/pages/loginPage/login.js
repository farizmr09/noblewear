import React from "react";
import styled from "styled-components";

export default function login() {
  return (
    <SignUpPageRootRootRoot>
      <LoginPage>
        <PageTitle>
          <SubTitle>
            -Johny
            <br />
            Doe
          </SubTitle>
          <SubTitle1>
            UGM
            {"  "}
            MODEL AWARDS 2023
          </SubTitle1>
          <SubTitle2>Noble wear</SubTitle2>
          <ImageDisclaimer>
            "The pictures used in this website are sourced from Vogue and other
            reputable fashion sources. We do not claim any copyright or
            ownership of these images. They are used for educational <br />
            purposes only, to showcase the latest fashion trends and inspire our
            users. “
          </ImageDisclaimer>
        </PageTitle>
        <IzBrGroup>
          <IzBrRectangle>
            <IzBrVector src="https://file.rendit.io/n/eECwSPO9uQvkAAYDAyqN.svg" />
          </IzBrRectangle>
          <IzBrSubTitle>
            By IzBr<ByIzBrother>other.</ByIzBrother>
          </IzBrSubTitle>
        </IzBrGroup>
        <LoginRectangle>
          <LoginGroup>
            <WelcomeBackTitle>Welcome back!</WelcomeBackTitle>
            <LoginSubtitle>
              We're excited to see you again! Access exclusive content, and
              receive personalized recommendations to elevate your style!
            </LoginSubtitle>
            <CompanyName>noblewear</CompanyName>
          </LoginGroup>
          <EmailPhoneUsername>
            Email / Phone Number / Username
          </EmailPhoneUsername>
          <EmailPhoneUsernameField>
            <EmailPhoneUsernameInput>
              <input type="text" placeholder="ramzy.izza.wardhana@email.com" style={{ border: 'none', width: '100%', outline: 'none' }} />
            </EmailPhoneUsernameInput>
            <PasswordEye>
              <EyeOpen src="https://file.rendit.io/n/P7sXFd2IdtgMKxKfeFyC.svg" />
              <EyeClosed src="https://file.rendit.io/n/8tVl4vHA7cA3dYv6vmG3.svg" />
            </PasswordEye>
          </EmailPhoneUsernameField>
          <PasswordField>Password</PasswordField>
          <PasswordInput>
            <PasswordInputField>                    <input type="password" placeholder="••••••••••" style={{ border: 'none', width: '100%', outline: 'none' }} />
            </PasswordInputField>
            <PasswordEye1 src="https://file.rendit.io/n/O5S8vCfK1LoqiEBb5uii.svg" />
          </PasswordInput>
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
          <SignUpGroup>
            <AlreadyAccountTitle>Don’t Have an Account ?</AlreadyAccountTitle>
            <SignUpButtonText>Sign up</SignUpButtonText>
          </SignUpGroup>
        </LoginRectangle>
      </LoginPage>
    </SignUpPageRootRootRoot>
  );
};

const SignUpPageRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 0px 5%; 
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;

const LoginPage = styled.div`
  width: 100%; // use percentage instead of fixed value
  max-width: 1512px; // set a max-width to maintain proportional size
  position: relative;
  gap: 5%; // use percentage instead of fixed value
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 5% 5% 0px 5%; // use percentage instead of fixed value
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;

const PageTitle = styled.div`
  width: 765px;
  height: 1052px;
  left: 790px;
  top: 0px;
  position: absolute;
  gap: 0.62px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 647px 45.4px 77.1px 45.4px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/YvFok5EFrlGGj5RSNx9n.png");
`;
const SubTitle = styled.div`
  align-self: flex-end;
  margin: 0px 6.91px 13px 0px;
  color: #ffffff;
  font-size: 48px;
  font-family: Brand;
  line-height: 41.040000915527344px;
  text-align: right;
  white-space: nowrap;
  box-sizing: border-box;
`;
const SubTitle1 = styled.div`
  align-self: flex-end;
  margin: 0px 44.5px 130px 0px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 15.959999799728394px;
  box-sizing: border-box;
`;
const SubTitle2 = styled.div`
  color: #ffffff;
  font-size: 35px;
  font-family: Brand;
  white-space: nowrap;
  box-sizing: border-box;
`;
const ImageDisclaimer = styled.div`
  width: 96.27%;
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 12.539999842643738px;
  box-sizing: border-box;
`;
const IzBrGroup = styled.div`
  width: 690px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 0px 91px;
  box-sizing: border-box;
`;
const IzBrRectangle = styled.div`
  width: 4.93%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 8.86px 11.2px 9.65px 11.2px;
  border-width: 2px;
  border-style: solid;
  border-color: #373737;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const IzBrVector = styled.img`
  width: 89.45%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const IzBrSubTitle = styled.div`
  margin: 3px 0px 0px 0px;
  color: #474747;
  font-size: 33px;
  font-family: Antipasto Pro;
  white-space: nowrap;
  box-sizing: border-box;
`;
const ByIzBrother = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 33px;
  font-family: Antipasto Pro;
`;
const LoginRectangle = styled.div`
  width: 634px;
  position: relative;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px -28px 0px;
  padding: 95px 82px 341px 82px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const LoginGroup = styled.div`
  width: 460px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 24px 0px;
  padding: 0px 178px 92px 178px;
  box-sizing: border-box;
`;
const WelcomeBackTitle = styled.div`
  width: 352px;
  height: 62px;
  left: 58px;
  top: 23px;
  position: absolute;
  font-size: 48px;
  font-family: Brand;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const LoginSubtitle = styled.div`
  width: 100%;
  height: 42px;
  left: 0px;
  top: 76px;
  position: absolute;
  color: #919191;
  font-size: 14px;
  font-family: Poppins;
  text-align: center;
  box-sizing: border-box;
`;
const CompanyName = styled.div`
  position: relative;
  color: #525252;
  font-size: 20px;
  font-family: Brand;
  white-space: nowrap;
  box-sizing: border-box;
`;
const EmailPhoneUsername = styled.div`
  margin: 0px 0px 0px 9px;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const EmailPhoneUsernameField = styled.div`
  width: 451px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 9px 9px;
  padding: 14px 15.2px 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const EmailPhoneUsernameInput = styled.div`
  margin: 0px 0px 1px 0px;
  font-size: 16px;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PasswordEye = styled.div`
  width: 3.71%;
  gap: 2.51px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4.25px 0px 0px 0px;
  box-sizing: border-box;
`;
const EyeOpen = styled.img`
  width: 61.29%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0px 0px 0px 3px;
  box-sizing: border-box;
`;
const EyeClosed = styled.img`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: stretch;
  box-sizing: border-box;
`;
const PasswordField = styled.div`
  margin: 0px 0px 1px 9px;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PasswordInput = styled.div`
  width: 451px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 25px 9px;
  padding: 14px 15.4px 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const PasswordInputField = styled.div`
  align-self: flex-start;
  margin: 0px 0px 1px 0px;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PasswordEye1 = styled.img`
  width: 3.64%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const LoginButton = styled.div`
  width: 451px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 34px 6px;
  padding: 16px 201px 17px 201px;
  box-sizing: border-box;
  background-color: #525252;
`;
const LoginButtonText = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const SignUpGroup = styled.div`
  width: 262px;
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 99px;
  box-sizing: border-box;
`;
const AlreadyAccountTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const SignUpButtonText = styled.div`
  color: #777777;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
