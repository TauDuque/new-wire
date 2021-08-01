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
  .fourth-col img {
    width: 295px;
    box-shadow: var(--wine-shadow);
  }
  .first-text,
  .second-text,
  .eighth-col {
    padding: 25px 65px 25px 25px;
    text-align: center;
    line-height: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .first-col,
  .second-col,
  .third-col,
  .fourth-col,
  .fifth-col,
  .seventh-col,
  .eighth-col {
    flex-direction: column;
  }

  .third-col img {
    height: 50px;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }

  .fifth-col h2 {
    line-height: 4.5rem;
  }

  .sixth-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1.8fr 0.2fr 1.7fr 0.3fr;
    gap: 5px 5px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . .";
    width: 95%;
    height: 100%;
  }

  .img-container img {
    height: 155px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .img-container p {
    text-align: start;
    font-size: 8px;
  }

  .second-row-text {
    margin-top: 8px;
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
    .fourth-col img {
      width: 575px;
    }
    .first-text {
      padding: 45px 90px 45px 30px;
      line-height: 1.8rem;
    }
    .first-col,
    .fourth-col {
      display: flex;
      flex-direction: row;
    }
    .second-col {
      margin: 35px;
    }
    .third-col img {
      height: 205px;
    }
    .text-container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: 1.8fr;
      gap: 4px 10px;
      grid-auto-flow: row;
      grid-template-areas: ". . .";
      width: 100%;
      height: 100%;
    }

    .text-container img {
      height: 350px;
    }

    .text-container p {
      color: var(--clr-white-smoke);
      line-height: 1.8rem;
      text-align: center;
      padding: 0 95px 0 0;
    }

    .fourth-col {
      display: flex;
    }
    .second-img {
      padding: 25px 90px 25px 25px;
    }
    .second-text {
      padding: 45px 30px 45px 30px;
      line-height: 1.8rem;
    }
    .fifth-col h2 {
      line-height: 7.5rem;
    }
    .sixth-col {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .img-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1.8fr 0.2fr 1.7fr 0.3fr;
      gap: 12px 10px;
      grid-auto-flow: row;
      grid-template-areas:
        ". . ."
        ". . ."
        ". . ."
        ". . .";
      width: 85%;
      height: 100%;
    }
    .img-container img {
      height: 250px;
      width: 325px;
      display: flex;
      justify-content: center;
    }
    .img-container p {
      font-size: 15px;
    }
    .second-row-text {
      margin-top: 10px;
    }
    .seventh-col h2 {
      margin: 75px 0 0;
      text-align: start;
      padding-right: 625px;
    }
    .eighth-col p {
      padding: 35px 90px 35px 515px;
      line-height: 1.8rem;
    }
  }
`;
