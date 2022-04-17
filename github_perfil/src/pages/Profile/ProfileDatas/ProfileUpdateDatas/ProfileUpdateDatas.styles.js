import styled from 'styled-components';
import * as Variables from '../../../../styles/Variables';

const UpdateDatas = styled.form`
  label {
    display: block;
    width: 100%;
  }

  label, p, strong {
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

export default UpdateDatas;