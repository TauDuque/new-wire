import styled from "styled-components";

export const Wrapper = styled.section`
  .overlay {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateX(-100vw);
  }

  .overlay-slide-right {
    transition: all 0.4s ease-in-out;
    transform: translateX(0);
  }

  .overlay-slide-left {
    transition: all 0.8s ease-in-out;
    transform: translateX(-100vw);
  }

  nav,
  nav ul {
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  nav ul {
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
  }

  nav ul li {
    height: 16.66%;
    overflow: hidden;
  }

  nav li h3 {
    position: relative;
    top: 45%;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    display: block;
    text-align: center;
    cursor: pointer;
  }

  nav li h3:hover {
    transform: scale(1.1);
  }

  nav li h3::before {
    content: "";
    width: 25vw;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: 47.5%;
    left: 0;
    opacity: 0;
  }
  nav li h3::after {
    content: "";
    width: 25vw;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: 47.5%;
    right: 0;
    opacity: 0;
  }

  nav li h3:hover::before {
    opacity: 1;
  }

  nav li h3:hover::after {
    opacity: 1;
  }

  .slide-in-1 {
    animation: slide-in 0.4s linear 0.2s both;
  }
  .slide-in-2 {
    animation: slide-in 0.4s linear 0.4s both;
  }
  .slide-in-3 {
    animation: slide-in 0.4s linear 0.6s both;
  }
  .slide-in-4 {
    animation: slide-in 0.4s linear 0.8s both;
  }
  .slide-in-5 {
    animation: slide-in 0.4s linear 1s both;
  }
  .slide-in-6 {
    animation: slide-in 0.4s linear 1.2s both;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .slide-out-1 {
    animation: slide-out 0.4s linear 0.6s both;
  }
  .slide-out-2 {
    animation: slide-out 0.4s linear 0.5s both;
  }
  .slide-out-3 {
    animation: slide-out 0.4s linear 0.4s both;
  }
  .slide-out-4 {
    animation: slide-out 0.4s linear 0.3s both;
  }
  .slide-out-5 {
    animation: slide-out 0.4s linear 0.2s both;
  }
  .slide-out-6 {
    animation: slide-out 0.4s linear 0.1s both;
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .close-bar {
    position: fixed;
    top: 0.4rem;
    right: 2rem;
    z-index: 10;
    display: inline;
    cursor: pointer;
    background: transparent;
    border: none;
    color: var(--primaryColor);
  }
`;
