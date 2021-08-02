import styled from "styled-components";

export const Wrapper = styled.section`
  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 4px solid var(--clr-white);
    border-top-color: var(--black-classic);
    animation: spinner 0.6s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  @media (min-width: 992px) {
  }
`;
