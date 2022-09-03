import React from "react";
import { ButtonBack, ButtonFront } from "./index";

// export const Button = (props) => (
//   <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
//     {props.children}
//     <ButtonFront
//       alt={props.alt}
//       onClick={props.onClick}
//       disabled={props.disabled}
//     >
//       {props.title}
//     </ButtonFront>
//   </ButtonBack>
// );
// export const Button = (props) => (
//   <>
//     <a className="btn-12" href={props.url} download="">
//       <span>{props.title2}</span>
//       <span>{props.title}</span>
//     </a>
//     {props.children}
//     <style jsx>{`
//       .btn-12 {
//         color: #fff;
//         padding: 20px 25px;
//         font-family: "Lato", sans-serif;
//         font-weight: 500;
//         background: transparent;
//         cursor: pointer;
//         transition: all 0.3s ease;
//         display: inline-block;
//         margin: 0 5px;
//         outline: none;
//         position: relative;
//         right: 20px;
//         bottom: 20px;
//         border: none;
//         width: 150px;
//         height: 50px;
//         line-height: 42px;
//         -webkit-perspective: 230px;
//         perspective: 230px;
//       }
//       .btn-12 span {
//         background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
//         display: block;
//         position: absolute;
//         width: 150px;
//         height: 50px;
//         box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//           7px 7px 20px 0px rgba(0, 0, 0, 0.1),
//           4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//         border-radius: 15px;
      
//         text-align: center;
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box;
//         -webkit-transition: all 0.3s;
//         transition: all 0.3s;
//       }
//       .btn-12 span:nth-child(1) {
//         box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
//           7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
//         -webkit-transform: rotateX(90deg);
//         -moz-transform: rotateX(90deg);
//         transform: rotateX(90deg);
//         -webkit-transform-origin: 50% 50% -20px;
//         -moz-transform-origin: 50% 50% -20px;
//         transform-origin: 50% 50% -20px;
//       }
//       .btn-12 span:nth-child(2) {
//         -webkit-transform: rotateX(0deg);
//         -moz-transform: rotateX(0deg);
//         transform: rotateX(0deg);
//         -webkit-transform-origin: 50% 50% -20px;
//         -moz-transform-origin: 50% 50% -20px;
//         transform-origin: 50% 50% -20px;
//       }
//       .btn-12:hover span:nth-child(1) {
//         box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//           7px 7px 20px 0px rgba(0, 0, 0, 0.1),
//           4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//         -webkit-transform: rotateX(0deg);
//         -moz-transform: rotateX(0deg);
//         transform: rotateX(0deg);
//         background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
//       }
//       .btn-12:hover span:nth-child(2) {
//         box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//           7px 7px 20px 0px rgba(0, 0, 0, 0.1),
//           4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//         color: transparent;
//         -webkit-transform: rotateX(-90deg);
//         -moz-transform: rotateX(-90deg);
//         transform: rotateX(-90deg);
//         background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
//       }
//     `}</style>
//   </>
// );
// export const Button2 = (props) => (
//   <>
//     <a className="effect effect-1" href={props.url}>
//       <span>{props.title}</span>
//     </a>

//     <style jsx>{`
//       .effect {
//         text-align: center;
//         display: inline-block;
//         position: relative;
//         text-decoration: none;
//         color: #fff;
//         text-transform: capitalize;
//         font-family: "Roboto", sans-serif;
//         font-size: 18px;
//         padding: 15px 0px;
//         width: 150px;
//         border-radius: 16px;
//         overflow: hidden;
//         background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
//       }
//       .effect.effect-1 {
//         transition: all 0.2s linear 0s;
//       }
//       .effect.effect-1:before {
//         content: "→";
//         font-family: FontAwesome;
//         font-size: 20px;
//         position: absolute;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         right: 0;
//         top: 0;
//         opacity: 0;
//         height: 100%;
//         width: 40px;
//         transition: all 0.2s linear 0s;
//       }
//       .effect.effect-1:hover {
//         text-indent: -20px;
//         background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
//       }
//       .effect.effect-1:hover:before {
//         opacity: 1;
//         text-indent: 0px;
//       }
//     `}</style>
//   </>
// );
