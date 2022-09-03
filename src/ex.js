import React from "react";
import { image } from "./constants/constants";

const Ex = () => {
  var logo = image[0].image;
  return (
    <>
      <img src={logo} className="logo" />
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        sent me
      </a>
      <style jsx>{`
        .logo {
          height: 200px;
          width: 200px;
          margin: 50px;
        }

        a {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          color: #03e9f4;
          font-size: 16px;
          text-decoration: none;
          text-transform: uppercase;
          overflow: hidden;
          transition: 1s;
          margin-top: 40px;
          letter-spacing: 4px;
        }

        a:hover {
          background: #03e9f4;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 15px #03e9f4,
            0 0 15px #03e9f4;
        }
        a span {
          position: absolute;
          display: block;
        }

        a span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #f785fd);
          animation: btn-anim1 2s linear infinite;
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
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #d5f979);
          animation: btn-anim2 2s linear infinite;
          animation-delay: 0.5s;
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
          height: 4px;
          background: linear-gradient(270deg, transparent, #03e9f4);
          animation: btn-anim3 2s linear infinite;
          animation-delay: 1s;
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
          width: 4px;
          height: 100%;
          background: linear-gradient(360deg, transparent, #68fe65);
          animation: btn-anim4 2s linear infinite;
          animation-delay: 1.5s;
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
    </>
  );
};

export default Ex;
