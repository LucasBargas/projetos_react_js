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

  textarea:focus {
    border-color: ${Variables.BorderFocus};
    box-shadow: 0px 0px 6px 0px ${Variables.BorderFocus};
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

export const Datas = styled.div`
  p, a, li, button, span, strong, svg {
    color: ${Variables.MainFontColor};
  }

  p {
    font-size: .9375rem;
  }

  button {
    margin-top: 1rem;
    display: block;
    width: 100%;
    padding: 7px 1rem;
    font-size: .875rem;
    font-weight: 500;
    box-shadow: 0px 0px transparent, 0px 0px transparent;
    border: 1px solid rgba(240,246,252,0.1);
    background: ${Variables.DarkBtnColor};
    border-radius: 6px;
    transition: .2;

    &:hover {
      background: ${Variables.BorderColor};
      border-color: rgba(240,246,252,0.4);
    }
  }

  svg {
    position: relative;
    top: 2px;
  }

  ul {
    font-size: .875rem;

    li:not(:first-of-type) {
      margin-top: 6px;
    }

    a:hover {
      color: ${Variables.LinkColor};
      text-decoration: underline;
    }

    svg {
      margin-right: 2px;
      font-size: 1rem;
    }
  }
`;

export const Follows = styled.div`
  padding: 1rem 0 1.25rem 0;

  a {
    color: ${Variables.GrayColor};
    font-size: .875rem;
  }

  a:hover {
    color: ${Variables.LinkColor};

    svg, strong {
      color: ${Variables.LinkColor};
    }
  }
`;

export const UpdateDatas = styled.form`
  label, textarea {
    display: block;
    width: 100%;
  }

  label, textarea, p, strong {
    color: ${Variables.MainFontColor};
    font-size: .875rem;
  }

  label {
    margin-bottom: 6px;

    &:not(:first-of-type) {
      margin-top: 12px;
    }
  }

  textarea {
    height: 81px;
    padding: 8px 12px;
    resize: vertical;
    overflow-y: auto;
  }

  p {
    color: ${Variables.GrayColor};
    font-size: 12px;
    margin: 8px 0 10px 0;

    strong {
      color: ${Variables.GrayColor};
      font-weight: 400;
      font-size: 12px;
    }
  }

  div {
    display: flex;

    span {
      font-size: 1rem;
      color: ${Variables.MainFontColor};
      position: relative;
      top: 5px;
      margin-right: 8px;
    }

    &:not(:first-of-type) {
      margin-top: 7px;
    }
  }

  button {
    margin-top: 1rem;
    padding: 3px 12px;
    font-size: 12px;
    line-height: 20px;
    color: ${Variables.LightColor};
    background: ${Variables.GreenColor};
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
    transition: .2s;

    &:hover {
      background: ${Variables.GreenColorHover};
    }
  }
`;