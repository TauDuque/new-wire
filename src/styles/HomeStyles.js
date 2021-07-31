import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .mobile-bg {
    display: block;
    height: 665px;
  }
  .mobile {
    display: none;
    height: 100vh;
  }

  img {
    height: 590px;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  .home-info h2 {
    color: var(--clr-white-smoke);
    font-size: 8rem;
    line-height: 6.5rem;
    letter-spacing: -0.01em;
    text-transform: none;
    font-weight: 400;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .text-info { 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50vh;
  }
  .col-info {
    margin-top: 25px;
    color: var(--clr-white-smoke);
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .col-info h5 {
    font-size: 3rem;
    font-weight: 300;
  }
  ul {
    display: flex;
    justify-content: center;
    margin-top: 45px;
    gap: 12px;
  }

  ul li p {
    margin-top: 5px;
    font-size: 10px;
  }

  ul li img {
    height: 60px;
    width: 60px;
    cursor: pointer;
  }

  ul li img:hover {
    transform: scale(1.2);
  }

  .about-text {
    margin-top: 45px;
  }

  .about-text p {
    margin-top: 8px;
  }

  @media (min-width: 992px) {
    .mobile-bg {
      display: none;
    }
    .mobile {
      display: block;
      height: 100vh;
    }
    .home-info h2 {
      font-size: 12rem;
      line-height: 10rem;
    }
    .col-info h5 {
      font-size: 4rem;
      font-weight: 300;
    }
    .text-info {
      display: flex;
      flex-direction: row;
     
    
  }
`;
