import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Link from 'next/link'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <p>
            Welcome To <br />
            My Personal Portfolio
          </p>
        </SectionTitle>

        <SectionText>
          My responsibility is Completion of business related tasks by
          completing management, accounting, finance, marketing to achieve the
          goals objectives of the company. Through the supply chain by using
          SWAT analysis to avoid threats and exploit opportunities. I have
          black-belt from Programming-Hero Full stack web development course in
          MERN stack. my passion is programming. though my study in BBA in
          Management. then i need a job for start my programming development
          career.
        </SectionText>

        <div style={{ display: "flex" }}>
        <Link href="/myCareer">
          <a className="effect effect-1">
            <span>Learn More</span>
          </a>
          </Link>
          <a
            href="/images/bba_2022-08-13_Ashabul_Jannat.pdf"
            download="ashabul jannat cv_BBA"
            className="btn-12"
          >
            <span>Click Me →</span>
            <span>My CV of BBA</span>
          </a>
          <a
            href="/images/web-CV_2022-06-13_Ashabul_Jannat.pdf"
            download="ashabul jannat CV_WEB"
            className="btn-12"
          >
            <span>Click Me →</span>
            <span>My CV for Web</span>
          </a>
        </div>
      </LeftSection>
      <style jsx>{`
        p {
          background: linear-gradient(
            to right,
            #65e8f6 10%,
            #f785fd 50%,
            #d5f979 80%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animate 2s linear infinite;

          @keyframes animate {
            to {
              background-position: 200% center;
            }
          }
        }

        .effect {
          text-align: center;
          display: inline-block;
          position: relative;
          text-decoration: none;
          color: #fff;
          text-transform: capitalize;
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          padding: 15px 0px;
          width: 150px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
        }
        .effect.effect-1 {
          transition: all 0.2s linear 0s;
        }
        .effect.effect-1:before {
          content: "→";
          font-family: FontAwesome;
          font-size: 20px;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          right: 0;
          top: 0;
          opacity: 0;
          height: 100%;
          width: 40px;
          transition: all 0.2s linear 0s;
        }
        .effect.effect-1:hover {
          text-indent: -20px;
          background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
        }
        .effect.effect-1:hover:before {
          opacity: 1;
          text-indent: 0px;
        }

        .btn-12 {
          color: #fff;
          padding: 20px 25px;
          font-family: "Lato", sans-serif;
          font-weight: 500;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          margin: 0 5px;
          outline: none;
          position: relative;
          right: 20px;
          bottom: 20px;
          border: none;
          width: 150px;
          height: 50px;
          line-height: 42px;
          -webkit-perspective: 230px;
          perspective: 230px;
        }
        .btn-12 span {
          background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
          display: block;
          position: absolute;
          width: 150px;
          height: 50px;
          box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
            7px 7px 20px 0px rgba(0, 0, 0, 0.1),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
          border-radius: 15px;

          text-align: center;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }
        .btn-12 span:nth-child(1) {
          box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
            7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
          -webkit-transform: rotateX(90deg);
          -moz-transform: rotateX(90deg);
          transform: rotateX(90deg);
          -webkit-transform-origin: 50% 50% -20px;
          -moz-transform-origin: 50% 50% -20px;
          transform-origin: 50% 50% -20px;
        }
        .btn-12 span:nth-child(2) {
          -webkit-transform: rotateX(0deg);
          -moz-transform: rotateX(0deg);
          transform: rotateX(0deg);
          -webkit-transform-origin: 50% 50% -20px;
          -moz-transform-origin: 50% 50% -20px;
          transform-origin: 50% 50% -20px;
        }
        .btn-12:hover span:nth-child(1) {
          box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
            7px 7px 20px 0px rgba(0, 0, 0, 0.1),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
          -webkit-transform: rotateX(0deg);
          -moz-transform: rotateX(0deg);
          transform: rotateX(0deg);
          background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
        }
        .btn-12:hover span:nth-child(2) {
          box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
            7px 7px 20px 0px rgba(0, 0, 0, 0.1),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
          color: transparent;
          -webkit-transform: rotateX(-90deg);
          -moz-transform: rotateX(-90deg);
          transform: rotateX(-90deg);
          background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
        }
      `}</style>
    </Section>
  </>
);

export default Hero;
