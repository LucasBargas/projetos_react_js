import styled from 'styled-components';

export const ProfileDatasArea = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  position: relative;
  top: -4rem;

  @media (max-width: 480px) {
    position: static;
    order: 1;
  } 

  input:focus, textarea:focus {
    border-color: #1158c7;
    box-shadow: 0px 0px 6px 0px #1158c7;
  }
`;

export const UserPhoto = styled.div`
  padding-bottom: .875rem;

  img {
    width: 296px;
    height: 296px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 820px) {
      width: 250px;
      height: 250px;
    }
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #C9D1D9;
  }

  h3 {
    font-weight: 300;
    font-size: 1.25rem;
    color: #8b949e;
    line-height: 1.5rem;
  }
`;

export const Datas = styled.div`
  p, a, li, button, span, strong, svg {
    color: #C9D1D9;
  }

  p {
    font-size: 1rem;
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
    background: #21262d;
    border-radius: 6px;
    transition: .2;

    &:hover {
      background: #30363d;
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
      color: #58a6ff;
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
    color: #8b949e;
    font-size: .875rem;
  }

  a:hover {
    color: #58a6ff;

    svg, strong {
      color: #58a6ff;
    }
  }
`;

export const UpdateDatas = styled.form`
  label, input, textarea {
    display: block;
    width: 100%;
  }

  label, input, textarea, p, strong {
    color: #C9D1D9;
    font-size: .875rem;
  }

  label {
    margin-bottom: 6px;

    &:not(:first-of-type) {
      margin-top: 12px;
    }
  }

  input:nth-of-type(1), input:nth-of-type(2) {
    height: 2rem;
    padding: 5px 12px
  }

  textarea {
    height: 81px;
    padding: 8px 12px;
    resize: vertical;
    overflow-y: auto;
  }

  p {
    color: #8b949e;
    font-size: 12px;
    margin: 8px 0 10px 0;

    strong {
      color: #8b949e;
      font-weight: 400;
      font-size: 12px;
    }
  }

  div {
    display: flex;

    span {
      font-size: 1rem;
      color: #C9D1D9;
      position: relative;
      top: 5px;
      margin-right: 8px;
    }

    input {
      height: 28px !important;
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
    color: #ffffff;
    background: #238636;
    border: 1px solid rgba(240,246,252,0.1);
    border-radius: 6px;
    transition: .2s;

    &:hover {
      background: #26a641;
    }
  }
`;