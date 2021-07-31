import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 42px;
  .menu-bars {
    position: fixed;
    top: 0.2rem;
    right: 2rem;
    z-index: 10;
    display: inline;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 2px;
    background-color: #fff;
    margin: 8px 0;
    transition: 0.4s;
  }

  .change {
    display: none;
  }
`;
