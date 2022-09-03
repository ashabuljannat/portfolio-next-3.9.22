import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Services = () => (
  <>
    <Section nopadding id="projects">
      <SectionTitle main>My Services</SectionTitle>
      <SectionDivider colorAlt />

      <div className="container">
        <div className="row" style={{ display: "flex", flexDirection: "row" }}>
          <div className="col-md-4">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTik6FlSR101hOlPETU1JFuUb9PYu4EzwYLng&usqp=CAU" />
                </div>
                <h4>Business Executive Services</h4>
                <p>
                  Collaborating with Superiors to solve Business related tasks.
                  Completing my Work with responsibly and on time. I know
                  Management, Marketing, Finance, Accounting, Economics, Risk
                  Management, Business Low, Business Environment.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmd79RmgIEc8MaGZPUD4WaaDrRzIBWdZGtzd3x9JC8_HhEsk1yVv599u8C3o9hEGnMPo&usqp=CAU" />
                </div>
                <h4>Web Design with Development</h4>
                <p>
                  Code starting from Figma to Perfect Pixel as UI/UX. React/Next
                  with npm/yarn packages to complete the front-end. adding Node
                  for back-end with database nosql mongodb. making the site
                  attractive by adding firebase, Animation GSAP.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="main">
              <div className="service">
                <div className="service-logo">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7K-2cFgG0pucDL8Dk6ntpEPcOEnFcwxapw&usqp=CAU" />
                </div>
                <h4>App Development & Software Development</h4>
                <p>
                  Creating full stack App with React Native, Developing Software
                  with expo which is usable on android and ios. with RN npm
                  packages like react-navigation, native-ui, react-victor-icon,
                  expo packages. Managing status bar, React Gesture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 56px;
          min-height: 480px;
        }

        .main {
          width: 300px;
          min-height: 380px;
          text-align: center;
          position: relative;
          cursor: pointer;
          margin: 0 20px;
        }

        .service {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          position: absolute;
          bottom: 0;
          z-index: 1;
          box-shadow: 0 0 20px -15px #030380;
          transition: transform 0.8s;
        }

        .service-logo {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          margin: -90px auto 0;
          background: #fff;
          border: 18px solid #081018;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .service-logo img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .service p {
          color: #f785fd;
          line-height: 20px;
        }
        .service h4 {
          color: #f785fd;
          height: 35px;
          width: 80%;
          margin: 35px auto;
          background: #fff;
          position: relative;
        }

        .service h4::after,
        .service h4::before {
          content: "";
          width: 50px;
          height: 35px;
          position: absolute;
          z-index: -1;
        }

        .service h4::after {
          background: linear-gradient(to right, #fff, #007bff);
          right: -5px;
          top: -5px;
        }

        .service h4::before {
          background: linear-gradient(to right, #007bff, #fff);
          left: -5px;
          bottom: -5px;
        }

        .main::after {
          content: "";
          height: 200px;
          width: 80%;
          background: #e3f842;
          position: absolute;
          border-radius: 10px;
          bottom: 0;
          left: 10%;
          z-index: -1;
          box-shadow: 0 0 20px -15px #030380;
          transition: transform 0.8s;
        }
        .main::before {
          content: "";
          height: 200px;
          width: 64%;
          background: #42f8dd;
          position: absolute;
          border-radius: 10px;
          bottom: 0;
          left: 18%;
          z-index: -2;
        }

        .main:hover .service {
          transform: translateY(-50px);
        }

        .main:hover::after {
          transform: translateY(-25px);
        }

        .service-logo img {
          transition: transform 1s;
        }

        .main:hover .service-logo img {
          transform: rotate(360deg);
        }
      `}</style>
    </Section>
  </>
);

export default Services;
