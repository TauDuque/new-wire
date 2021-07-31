import styled from "styled-components";

export const Wrapper = styled.section`
  color: var(--clr-white-smoke);
  .season-info h2 {
    color: var(--clr-white-smoke);
    font-size: 3.5rem;
    line-height: 2.8rem;
    letter-spacing: 0.1rem;
    text-transform: none;
    font-weight: 400;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    text-align: end;
    margin: 20px;
  }

  .main-img,
  .second-img {
    display: flex;
    justify-content: center;
    margin: 15px;
  }

  .main-img img,
  .third-col img {
    width: 295px;
    box-shadow: var(--wine-shadow);
  }
  .first-text,
  .second-text,
  .fifth-col {
    padding: 25px 65px 25px 25px;
    text-align: center;
    line-height: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .first-col,
  .second-col,
  .third-col,
  .fourth-col,
  .fifth-col {
    flex-direction: column;
  }

  .second-col img {
    height: 50px;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media (min-width: 992px) {
    .season-info h2 {
      font-size: 8rem;
      line-height: 6.5rem;
      letter-spacing: 0.1rem;
      padding-left: 245px;
    }
    .title-season {
      margin: 75px 0 15px;
    }
    .main-img {
      padding: 25px;
    }
    .main-img img,
    .third-col img {
      width: 575px;
    }
    .first-text {
      padding: 45px 90px 45px 30px;
      line-height: 1.8rem;
    }
    .first-col,
    .third-col {
      display: flex;
      flex-direction: row;
    }
    .second-col img {
      height: 205px;
    }
    .third-col {
      display: flex;
    }
    .second-img {
      padding: 25px 90px 25px 25px;
    }
    .second-text {
      padding: 45px 30px 45px 30px;
      line-height: 1.8rem;
    }
    .fourth-col h2 {
      text-align: start;
      padding-right: 625px;
    }
    .fifth-col p {
      padding: 35px 90px 35px 515px;
      line-height: 1.8rem;
    }
  }
`;
