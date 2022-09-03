import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaStackOverflow,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { image } from "./constants/constants";

const FooterX = () => {
  var logo = image[0].image;
  return (
    <>
      <div className="container">
        <span className="big-circle"></span>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Some my info"</h3>
            <img src={logo} className="profile" alt="" />
            <div className="info">
              <div className="information">
                <FaMapMarkerAlt size="1.7rem" />
                <p>Dhamrai, Dhaka, Bangladesh</p>
              </div>
              <div className="information">
                <SiGmail size="1.5rem" />
                <p>
                  <a href="mailto:2alifashabuljannat@gmail.com">
                    2alifashabuljannat@gmail.com
                  </a>
                </p>
              </div>
              <div className="information">
                <FiPhoneCall size="1.5rem" />
                <p>
                  <a href="tel:+880 193 279 6080">+880 193 279 6080</a>
                </p>
              </div>
            </div>

            <div className="social-media">
              <p>Follow Me On...</p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/ashabuljannat.alif.14"
                  target="_blank"
                >
                  <FaFacebookF size="2rem" />
                </a>
                <a href="https://github.com/ashabuljannat" target="_blank">
                  <FaGithub size="2rem" />
                </a>
                <a
                  href="https://stackoverflow.com/users/16673476/ashabul-jannat"
                  target="_blank"
                >
                  <FaStackOverflow size="2rem" />
                </a>
                <a
                  href="https://www.linkedin.com/in/2alif-ashabuljannat-13981b1ba/"
                  target="_blank"
                >
                  <FaLinkedin size="2rem" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form>
              <h3 className="title">Contact us,,</h3>
              <div className="input-container">
                <input type="text" className="input" placeholder="Your Name" />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  className="input"
                  placeholder="Your Email"
                />
              </div>
              <div className="input-container">
                <input type="tel" className="input" placeholder="Your Number" />
              </div>
              <div className="input-container textarea">
                <textarea
                  className="input"
                  placeholder="Write your message what you wanna tell..."
                ></textarea>
              </div>
              <input type="submit" value="Send me" className="btn" />
            </form>
          </div>
        </div>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 170"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(247, 133, 253, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,136L30,133.2C60,130,120,125,180,127.5C240,130,300,142,360,127.5C420,113,480,74,540,62.3C600,51,660,68,720,85C780,102,840,119,900,110.5C960,102,1020,68,1080,56.7C1140,45,1200,57,1260,56.7C1320,57,1380,45,1440,56.7C1500,68,1560,102,1620,110.5C1680,119,1740,102,1800,102C1860,102,1920,119,1980,110.5C2040,102,2100,68,2160,68C2220,68,2280,102,2340,104.8C2400,108,2460,79,2520,62.3C2580,45,2640,40,2700,42.5C2760,45,2820,57,2880,53.8C2940,51,3000,34,3060,25.5C3120,17,3180,17,3240,14.2C3300,11,3360,6,3420,5.7C3480,6,3540,11,3600,31.2C3660,51,3720,85,3780,107.7C3840,130,3900,142,3960,121.8C4020,102,4080,51,4140,34C4200,17,4260,34,4290,42.5L4320,51L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stopColor="rgba(213, 249, 121, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
          fill="url(#sw-gradient-1)"
          d="M0,34L30,36.8C60,40,120,45,180,62.3C240,79,300,108,360,113.3C420,119,480,102,540,93.5C600,85,660,85,720,79.3C780,74,840,62,900,59.5C960,57,1020,62,1080,79.3C1140,96,1200,125,1260,124.7C1320,125,1380,96,1440,90.7C1500,85,1560,102,1620,102C1680,102,1740,85,1800,85C1860,85,1920,102,1980,107.7C2040,113,2100,108,2160,87.8C2220,68,2280,34,2340,36.8C2400,40,2460,79,2520,85C2580,91,2640,62,2700,56.7C2760,51,2820,68,2880,73.7C2940,79,3000,74,3060,82.2C3120,91,3180,113,3240,121.8C3300,130,3360,125,3420,104.8C3480,85,3540,51,3600,48.2C3660,45,3720,74,3780,79.3C3840,85,3900,68,3960,70.8C4020,74,4080,96,4140,110.5C4200,125,4260,130,4290,133.2L4320,136L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
          fill="url(#sw-gradient-2)"
          d="M0,0L30,22.7C60,45,120,91,180,110.5C240,130,300,125,360,121.8C420,119,480,119,540,116.2C600,113,660,108,720,93.5C780,79,840,57,900,59.5C960,62,1020,91,1080,96.3C1140,102,1200,85,1260,68C1320,51,1380,34,1440,28.3C1500,23,1560,28,1620,45.3C1680,62,1740,91,1800,96.3C1860,102,1920,85,1980,87.8C2040,91,2100,113,2160,102C2220,91,2280,45,2340,28.3C2400,11,2460,23,2520,25.5C2580,28,2640,23,2700,25.5C2760,28,2820,40,2880,59.5C2940,79,3000,108,3060,119C3120,130,3180,125,3240,113.3C3300,102,3360,85,3420,70.8C3480,57,3540,45,3600,45.3C3660,45,3720,57,3780,65.2C3840,74,3900,79,3960,73.7C4020,68,4080,51,4140,53.8C4200,57,4260,79,4290,90.7L4320,102L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
        ></path>
      </svg>
      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 2rem;

          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form {
          width: 100%;
          max-width: 820px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .contact-form {
          background-color: #1abc9c;
          position: relative;
        }

        .circle {
          border-radius: 50%;
          background: linear-gradient(135deg, transparent 20%, #ffffffa7);
          position: absolute;
        }

        .circle.one {
          width: 130px;
          height: 130px;
          top: 130px;
          right: -40px;
        }

        .circle.two {
          width: 80px;
          height: 80px;
          top: 10px;
          right: 30px;
        }

        .contact-form:before {
          content: "";
          position: absolute;
          width: 26px;
          height: 26px;
          background-color: #1abc9c;
          transform: rotate(45deg);
          top: 50px;
          left: -13px;
        }

        form {
          padding: 2.3rem 2.2rem;
          z-index: 10;
          overflow: hidden;
          position: relative;
        }

        .title {
          color: #fff;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 1;
          margin-bottom: 0.7rem;
        }

        .input-container {
          position: relative;
          margin: 1rem 0;
        }

        .input {
          width: 100%;
          outline: none;
          border: 2px solid #fafafa;
          background: none;
          padding: 0.6rem 1.2rem;
          color: #fff;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          border-radius: 25px;
          transition: 0.3s;
        }

        textarea.input {
          padding: 0.8rem 1.2rem;
          min-height: 150px;
          border-radius: 22px;
          resize: none;
          overflow-y: auto;
        }

        .btn {
          padding: 0.6rem 1.3rem;
          background-color: #fff;
          border: 2px solid #fafafa;
          font-size: 0.95rem;
          color: #1abc9c;
          line-height: 1;
          border-radius: 25px;
          outline: none;
          cursor: pointer;
          transition: 0.3s;
          margin: 0;
        }

        .btn:hover {
          background-color: transparent;
          color: #fff;
        }

        .input-container span {
          position: absolute;
          top: 0;
          left: 25px;
          transform: translateY(-50%);
          font-size: 0.8rem;
          padding: 0 0.4rem;
          color: transparent;
          pointer-events: none;
          z-index: 500;
        }

        .input-container span:before,
        .input-container span:after {
          content: "";
          position: absolute;
          width: 10%;
          opacity: 0;
          transition: 0.3s;
          height: 5px;
          background-color: #1abc9c;
          top: 50%;
          transform: translateY(-50%);
        }

        .input-container span:before {
          left: 50%;
        }

        .input-container span:after {
          right: 50%;
        }

        .input-container.focus label {
          top: 0;
          transform: translateY(-50%);
          left: 25px;
          font-size: 0.8rem;
        }

        .input-container.focus span:before,
        .input-container.focus span:after {
          width: 50%;
          opacity: 1;
        }

        .contact-info {
          padding: 2.3rem 2.2rem;
          position: relative;
        }

        .contact-info .title {
          color: #1abc9c;
        }
        .profile {
          height: 230px;
          width: 230px;
        }

        .information {
          display: flex;
          color: #555;
          margin: 0.7rem 0;
          align-items: center;
          font-size: 0.95rem;
        }
        .information p {
          margin-left: 5px;
        }

        .icon {
          width: 28px;
          margin-right: 0.7rem;
        }

        .social-media {
          padding: 2rem 0 0 0;
        }

        .social-media p {
          color: #333;
        }

        .social-icons {
          display: flex;
          margin-top: 0.5rem;
        }

        .social-icons a {
          width: 35px;
          height: 35px;
          border-radius: 5px;
          background: linear-gradient(45deg, #1abc9c, #149279);
          color: #fff;
          text-align: center;
          line-height: 35px;
          margin-right: 0.7rem;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .social-icons a:hover {
          transform: rotateZ(20deg);
        }

        .contact-info:before {
          content: "";
          position: absolute;
          width: 110px;
          height: 100px;
          border: 22px solid #1abc9c;
          border-radius: 50%;
          bottom: -77px;
          right: 50px;
          opacity: 0.3;
        }

        .big-circle {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: linear-gradient(to bottom, #1cd4af, #159b80);
          bottom: 45%;
          right: 43%;
          transform: translate(-40%, 38%);
        }

        .big-circle:after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          background-color: #000;
          border-radius: 50%;
          top: calc(50% - 180px);
          left: calc(50% - 180px);
        }

        @media (max-width: 850px) {
          .form {
            grid-template-columns: 1fr;
          }

          .contact-info:before {
            bottom: initial;
            top: -75px;
            right: 65px;
            transform: scale(0.95);
          }

          .contact-form:before {
            top: -13px;
            left: initial;
            right: 70px;
          }

          .big-circle {
            bottom: 75%;
            transform: scale(0.9) translate(-40%, 30%);
            right: 50%;
          }

          .text {
            margin: 1rem 0 1.5rem 0;
          }

          .social-media {
            padding: 1.5rem 0 0 0;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem;
          }

          .contact-info:before {
            display: none;
          }

          .big-circle {
            display: none;
          }

          form,
          .contact-info {
            padding: 1.7rem 1.6rem;
          }

          .text,
          .information,
          .social-media p {
            font-size: 0.8rem;
          }

          .title {
            font-size: 1.15rem;
          }

          .social-icons a {
            width: 30px;
            height: 30px;
            line-height: 30px;
          }

          .icon {
            width: 23px;
          }

          .input {
            padding: 0.45rem 1.2rem;
          }

          .btn {
            padding: 0.45rem 1.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default FooterX;
