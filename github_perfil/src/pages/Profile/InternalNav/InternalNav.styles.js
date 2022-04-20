import styled, { css } from 'styled-components';
import * as Variables from '../../../styles/Variables';

export const InternalNavContainer = styled.section`
  grid-column: 1 / 5;
  border-bottom: 1px solid ${Variables.BorderColor};
  display: flex;
  
  @media (max-width: 768px) {
    background: ${Variables.SecondaryBgColor};
  }
  
  ${({ fixed }) => fixed && css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 600;
  `}

  ${({ showUser }) => showUser && css`
    background: ${Variables.PrimaryBgColor};
  `}

  @media (max-width: 768px) {
    grid-column: 1 / 4;
  }

  @media (max-width: 480px) {
    padding-top: 1rem;
    order: 2;
  }

  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    font-size: .875rem;

    @media (max-width: 1024px) {
      display: flex;
    }

    ul {
      background: ${Variables.PrimaryBgColor};
      display: flex;
      grid-column: 2 / 5;
      grid-row: 1 / 2;
      overflow-x: auto;
      position: relative;
      z-index: 500;

      @media (max-width: 1024px) {
        width: 70%;
      }

      @media (max-width: 820px) {
        width: 65%;
      }
      
      @media (max-width: 768px) {
        background: ${Variables.SecondaryBgColor};
      }

      @media (max-width: 480px) {
        width: 100%;
      }

      a {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-bottom: 2px solid transparent;
        color: ${Variables.MainFontColor};

        &:hover {
          border-bottom-color: #6e7681;
        }

        span {
          position: relative;
          top: 2px;
          margin-right: 6px;
          font-size: 1rem;
          color: ${Variables.MainFontColor};

          @media (max-width: 480px) {
            display: none;
          }
        }

        &.active {
          border-bottom-color: #F78166;
          color: #f0f0f0;
        }
      }
    }
  }
`;

export const InternalNavUser = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  font-size: .875rem;
  color: ${Variables.MainFontColor};
  opacity: 0;
  visibility: hidden;
  transition: .4s;

  ${({ showUser }) => showUser && css`
    opacity: 1;
    visibility: visible;
  `}

  @media (max-width: 1024px) {
    width: 35%;
  }
  
  @media (max-width: 820px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    display: none;
  }

  figure {
    margin-right: .5rem;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;

export const FlagLength = styled.span`
  padding: 0 6px;
  font-size: .75rem !important;
  font-weight: 500;
  line-height: 18px;
  border-radius: .75rem;
  border: 1px solid rgba(0, 0, 0, 0);
  background: rgba(110, 118, 129, .4);
  margin-left: 7px;
`;