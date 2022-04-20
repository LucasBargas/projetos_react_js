import styled from "styled-components";
import * as Variables from '../../../styles/Variables';

export const PackagesShowcaseArea = styled.div`
  padding-top: 3rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${Variables.GrayColor};
  }
`;

export const PackagesShowcaseContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 1rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  div {
    padding: 1.5rem;
    text-align: left;
    border: 1px solid ${Variables.BorderColor};
    border-radius: 4px;

    figure {
      display: flex;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }

      h3 {
        color: ${Variables.MainFontColor};
        font-weight: 500;
        margin-left: 5px;
      }
    }

    p {
      margin: 1rem 0;
      line-height: 1.5;
      font-size: .75rem;
      width: 90%;
    }

    button {
      font-size: .75rem;
      background: ${Variables.DarkBtnColor};
      color: ${Variables.MainFontColor};
      padding: 5px 12px;
      border-radius: 6px;
      font-weight: 500;
      box-shadow: 0px 0px transparent, 0px 0px transparent;
      border: 1px solid rgba(240,246,252,0.1);
      transition: .2;

      &:hover {
        background: ${Variables.BorderColor};
        border-color: rgba(240,246,252,0.4);
      }
    }
  }
`;