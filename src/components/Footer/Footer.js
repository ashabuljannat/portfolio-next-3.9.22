import React from "react";
import FooterX from "../../footerX";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <Section id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        <SectionDivider colorAlt />

        {/* <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            contact@jsmastery.com
          </LinkItem>
        </LinkColumn>
      </LinkList> */}
        {/* <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ashabuljannat">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/2alif-ashabuljannat-13981b1ba/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/ashabuljannat.alif.14">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer> */}
        {/* <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src={logo}  className="logo"/>
      </a> */}
        <style jsx>{`
          .logo {
            height: 130px;
            width: 130px;
          }

          a span {
            position: absolute;
            display: block;
          }

          a span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #03e9f4);
            animation: btn-anim1 1s linear infinite;
          }

          @keyframes btn-anim1 {
            0% {
              left: -100%;
            }
            50%,
            100% {
              left: 100%;
            }
          }

          a span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #03e9f4);
            animation: btn-anim2 1s linear infinite;
            animation-delay: 0.25s;
          }

          @keyframes btn-anim2 {
            0% {
              top: -100%;
            }
            50%,
            100% {
              top: 100%;
            }
          }

          a span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #03e9f4);
            animation: btn-anim3 1s linear infinite;
            animation-delay: 0.5s;
          }

          @keyframes btn-anim3 {
            0% {
              right: -100%;
            }
            50%,
            100% {
              right: 100%;
            }
          }

          a span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #03e9f4);
            animation: btn-anim4 1s linear infinite;
            animation-delay: 0.75s;
          }

          @keyframes btn-anim4 {
            0% {
              bottom: -100%;
            }
            50%,
            100% {
              bottom: 100%;
            }
          }
        `}</style>
      </Section>
      <FooterX />
    </>
  );
};

export default Footer;
