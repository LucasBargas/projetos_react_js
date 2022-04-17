import styled from 'styled-components';
import * as Variables from '../../../styles/Variables';

export const ProfileDatasArea = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  position: relative;
  top: -4rem;

  @media (max-width: 480px) {
    position: static;
    order: 1;
  } 
`;

export const UserPhoto = styled.div`
  padding-bottom: .875rem;

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
  }

  img {
    width: 296px;
    height: 296px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 820px) {
      width: 250px;
      height: 250px;
    }

    @media (max-width: 480px) {
      width: 74px;
      height: 74px;
    }
  }

  div {
    @media (max-width: 480px) {
      padding-left: 1rem;
    }
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Variables.MainFontColor};

    @media (max-width: 480px) {
      margin-top: 0;
      font-weight: 600;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1.25rem;
    color: ${Variables.GrayColor};
    line-height: 1.5rem;
  }
`;