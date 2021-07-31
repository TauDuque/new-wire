import styled from "styled-components";

export const SocialBtn = styled.section`
  margin-top: 15px;
  .btn-wrapper {
    place-items: center;
    display: inline-flex;
  }
  .icon {
    position: relative;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .google {
    background-color: #ffffff;
    color: #de463b;
  }

  .github {
    background-color: #ffffff;
    color: #333333;
  }

  .linkedin {
    background-color: #ffffff;
    color: #3b5999;
  }

  .btn-wrapper .icon:hover {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .btn-wrapper .icon:hover {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }
  .btn-wrapper .google:hover,
  .btn-wrapper .google:hover::before {
    background-color: #de463b;
    color: #ffffff;
  }
  .btn-wrapper .github:hover,
  .btn-wrapper .github:hover::before {
    background-color: #333333;
    color: #ffffff;
  }

  .btn-wrapper .linkedin:hover,
  .btn-wrapper .linkedin:hover::before {
    background-color: #3b5999;
    color: #ffffff;
  }

  @media (min-width: 992px) {
  }
`;
