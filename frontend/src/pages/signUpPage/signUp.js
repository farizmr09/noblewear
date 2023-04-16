import React from "react";
import styled from "styled-components";

export default function signup() {
  return (
    <DesktopSignUpPageRootRootRoot>
      <SignUpForm>
        <FormHeader>
          <HeaderMessage>Fashionably late?</HeaderMessage>
          <SubHeaderMessage>
            Get access to fashion deals and discounts by Signing up today!
          </SubHeaderMessage>
          <BrandName>noblewear</BrandName>
        </FormHeader>
        <EmailLabel>Email</EmailLabel>
        <EmailInputContainer>
          <EmailInput>ramzy.izza.wardhana@email.com</EmailInput>
          <EmailInputIcon src="https://file.rendit.io/n/On52kvHUCUzOUSwfMPeJ.svg" />
        </EmailInputContainer>
        <PhoneNumberLabel>Phone Number</PhoneNumberLabel>
        <PhoneNumberInputContainer>
          <EmailInput>+62-1234-5678-91011</EmailInput>
          <PhoneNumberInputIcon src="https://file.rendit.io/n/BOX6U6ZdY3sWEbSMgMyf.svg" />
        </PhoneNumberInputContainer>
        <NameAndUsernameLabel>
          <EmailLabel>Name</EmailLabel>
          <EmailLabel>Username</EmailLabel>
        </NameAndUsernameLabel>
        <NameAndUsernameInputContainer>
          <NameInputContainer>
            <EmailInput>Ramzy</EmailInput>
            <Group2>
              <VisiblePasswordEyeIcon src="https://file.rendit.io/n/yh74442hCWAMN4baoLEt.svg" />
              <HiddenPasswordEyeIcon src="https://file.rendit.io/n/n6RHspkRxkRqkHyIaljE.svg" />
            </Group2>
          </NameInputContainer>
          <UsernameInputContainer>
            <EmailInput>ramzyizza</EmailInput>
            <UserIconGroup>
              <Group3>
                <UserIconPath src="https://file.rendit.io/n/2NceCCXpdKdzNYmLwCNi.svg" />
                <UserIconPath1 src="https://file.rendit.io/n/iZa9XJ0GjAfIeerbB2Bb.svg" />
              </Group3>
              <RightFacingArrowIcon src="https://file.rendit.io/n/qZ1y4SgK1tLiyxbuXvKW.svg" />
            </UserIconGroup>
          </UsernameInputContainer>
        </NameAndUsernameInputContainer>
        <PhoneNumberLabel>Password</PhoneNumberLabel>
        <PasswordInputContainer>
          <PasswordInput>••••••••••</PasswordInput>
          <PasswordInputIcon src="https://file.rendit.io/n/i3rC63rumTbuDSjNDX73.svg" />
        </PasswordInputContainer>
        <PhoneNumberLabel>Confirm Password</PhoneNumberLabel>
        <ConfirmPasswordInputContainer>
          <ConfirmPasswordInput>helloworld</ConfirmPasswordInput>
          <Group4>
            <VisiblePasswordEyeIcon1>
              <VisibleDotIcon src="https://file.rendit.io/n/OjHuECgs3D7k6YFr7SyO.svg" />
            </VisiblePasswordEyeIcon1>
            <UserIconPath1 src="https://file.rendit.io/n/no9GkzxkQPZqtj3LSJJs.svg" />
          </Group4>
        </ConfirmPasswordInputContainer>
        <SignUpButtonContainer>
          <SignUpButton>Sign Up</SignUpButton>
        </SignUpButtonContainer>
        <SignInRedirectText>
          <EmailLabel>Already Have an Account?</EmailLabel>
          <SignInRedirectLink>Sign In</SignInRedirectLink>
        </SignInRedirectText>
      </SignUpForm>
      <BackButton src="https://file.rendit.io/n/qtKhAvagA8BtykxHe1yy.png" />
      <Group5>
        <HeroSection>
          <MainSubtitle>
            -sapnu
            <br />
            puas
          </MainSubtitle>
          <MainTitle>DIKE MODEL AWARDS 2023</MainTitle>
          <BrandName1>Noble wear</BrandName1>
          <ImageAttributionText>
            "The pictures used in this website are sourced from Vogue and other
            reputable fashion sources. We do not claim any copyright or
            ownership of these images. They are used for educational <br />
            purposes only, to showcase the latest fashion trends and inspire our
            users. “
          </ImageAttributionText>
        </HeroSection>
        <Logo>
          By IzBr<ByIzBrother>other.</ByIzBrother>
        </Logo>
      </Group5>
    </DesktopSignUpPageRootRootRoot>
  );
};

const EmailLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const EmailInput = styled.div`
  margin: 0px 0px 1px 0px;
  font-size: 16px;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PhoneNumberLabel = styled.div`
  margin: 0px 0px 1px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const UserIconPath1 = styled.img`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const DesktopSignUpPageRootRootRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 0px 0px 145px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const SignUpForm = styled.div`
  width: 90.41%;
  height: 898px;
  left: 150px;
  top: 120px;
  position: absolute;
  gap: 2px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 95px 10px 64px 80px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const FormHeader = styled.div`
  width: 407px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 25px 22px;
  padding: 0px 150px 91px 150px;
  box-sizing: border-box;
`;
const HeaderMessage = styled.div`
  width: 407px;
  height: 62px;
  left: 0px;
  top: 23px;
  position: absolute;
  font-size: 48px;
  font-family: Brand;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const SubHeaderMessage = styled.div`
  width: 74.45%;
  height: 42px;
  left: 57px;
  top: 75px;
  position: absolute;
  color: #919191;
  font-size: 14px;
  font-family: Poppins;
  text-align: center;
  box-sizing: border-box;
`;
const BrandName = styled.div`
  position: relative;
  color: #525252;
  font-size: 20px;
  font-family: Brand;
  white-space: nowrap;
  box-sizing: border-box;
`;
const EmailInputContainer = styled.div`
  width: 451px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 6px 0px;
  padding: 14px 14px 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const EmailInputIcon = styled.img`
  width: 4.06%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 4px 0px 0px 0px;
  box-sizing: border-box;
`;
const PhoneNumberInputContainer = styled.div`
  width: 451px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 6px 0px;
  padding: 14px 15px 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const PhoneNumberInputIcon = styled.img`
  width: 3.83%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 4px 0px 0px 0px;
  box-sizing: border-box;
`;
const NameAndUsernameLabel = styled.div`
  width: 315px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 1px 0px;
  box-sizing: border-box;
`;
const NameAndUsernameInputContainer = styled.div`
  width: 451px;
  gap: 11px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 6px 0px;
  box-sizing: border-box;
`;
const NameInputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 17px 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const Group2 = styled.div`
  width: 7.57%;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4px 0px 0px 0px;
  box-sizing: border-box;
`;
const VisiblePasswordEyeIcon = styled.img`
  width: 57.14%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0px 0px 0px 3px;
  box-sizing: border-box;
`;
const HiddenPasswordEyeIcon = styled.img`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: stretch;
  box-sizing: border-box;
`;
const UsernameInputContainer = styled.div`
  width: 50%;
  gap: 96px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 15px 14px 12px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const UserIconGroup = styled.div`
  width: 16.84%;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4px 0px 0px 0px;
  padding: 4px 7px 3px 7px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/AGJpUQGA7SjmXEekqemD.svg");
`;
const Group3 = styled.div`
  width: 2px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const UserIconPath = styled.img`
  width: 50%;
  min-width: 0px;
  height: 1px;
  min-height: 0px;
  left: 1px;
  top: 1px;
  position: absolute;
  box-sizing: border-box;
`;
const RightFacingArrowIcon = styled.img`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const PasswordInputContainer = styled.div`
  width: 451px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 6px 0px;
  padding: 14px 15px 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const PasswordInput = styled.div`
  align-self: flex-start;
  margin: 0px 0px 1px 0px;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PasswordInputIcon = styled.img`
  width: 3.83%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const ConfirmPasswordInputContainer = styled.div`
  width: 451px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 18px 0px;
  padding: 14px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #989898;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const ConfirmPasswordInput = styled.div`
  margin: 0px 0px 1px 0px;
  font-size: 16px;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 3.84%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4px 0px 0px 0px;
  padding: 0px 1px 7px 1px;
  box-sizing: border-box;
`;
const VisiblePasswordEyeIcon1 = styled.div`
  width: 100%;
  height: 10px;
  left: 0px;
  top: 3px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3px 5px 2px 5px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/TvUKRoYOaGYyKZCEccS7.svg");
`;
const VisibleDotIcon = styled.img`
  width: 66.67%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const SignUpButtonContainer = styled.div`
  width: 451px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 51px 0px;
  padding: 16px 189px 17px 189px;
  box-sizing: border-box;
  background-color: #525252;
`;
const SignUpButton = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const SignInRedirectText = styled.div`
  width: 271px;
  gap: 3px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 95px;
  box-sizing: border-box;
`;
const SignInRedirectLink = styled.div`
  color: #777777;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  white-space: nowrap;
  box-sizing: border-box;
`;
const BackButton = styled.img`
  width: 2.49%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  margin: 55px 0px 0px 0px;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 68.11%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px -91px 0px 0px;
  padding: 55px 0px 968px 0px;
  box-sizing: border-box;
`;
const HeroSection = styled.div`
  width: 90.23%;
  height: 1051px;
  left: 91px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 481px 0px 0px 44px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/tTk87iDnpi4p0Ji9thP9.png");
`;
const MainSubtitle = styled.div`
  margin: 0px 0px 12px 58px;
  color: #ffffff;
  font-size: 48px;
  font-family: Brand;
  line-height: 41.040000915527344px;
  text-align: right;
  white-space: nowrap;
  box-sizing: border-box;
`;
const MainTitle = styled.div`
  margin: 0px 0px 325px 0px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 15.959999799728394px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const BrandName1 = styled.div`
  color: #ffffff;
  font-size: 35px;
  font-family: Brand;
  white-space: nowrap;
  box-sizing: border-box;
`;
const ImageAttributionText = styled.div`
  width: 79.9%;
  margin: 0px 0px 50px 0px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 12.539999842643738px;
  box-sizing: border-box;
`;
const Logo = styled.div`
  position: relative;
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
