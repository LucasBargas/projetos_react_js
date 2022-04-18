import styled from 'styled-components';
import * as Variables from '../../../styles/Variables';

export const RepoListArea = styled.div`
  ul {
    li {
      border-top: 1px solid ${Variables.DarkBtnColor};
      border-bottom: 1px solid ${Variables.DarkBtnColor};
      padding: 1.5rem 0;

      p {
        color: ${Variables.GrayColor};
        font-size: .8125rem;
        margin: .5rem 0 1rem 0;
        width: 55%;
        line-height: 1.5;

        @media(max-width: 375px) {
          width: 65%;
        }

        @media(max-width: 276px) {
          width: 75%;
        }
      }
    }
  }
`;

export const ClearFilterMessage = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: .875rem;
  gap: 1rem;
  padding: 1.25rem 0 !important;

  strong {
    font-weight: 500;
  }
`;

export const ClearFilterBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${Variables.LinkColor};

    button {
      background: ${Variables.LinkColor};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 6px;
    background: #6e7681;
    color: ${Variables.LightColor};
    margin-right: .5rem;

    svg {
      font-size: 1rem;
    }
  }
`;

export const RepoTitle = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${Variables.LinkColor};
    font-size: 1.25rem;
    font-weight: 500;

    @media(max-width: 276px) {
      font-size: 1rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: inline-block;
    font-size: .75rem;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid ${Variables.BorderColor};
    border-radius: 2rem;
    color: ${Variables.GrayColor};
    padding: 0 7px;
    margin-left: .5rem;
  }
`;

export const RepoTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
`;

export const TagLang = styled.div`
  display: flex;
  align-items: center;
  font-size: .75rem;
  color: ${Variables.GrayColor};

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    margin-right: .2rem;

    &.javascript {
      background: #f1e05a;
    }

    &.html {
      background: #e34c26;
    }

    &.css {
      background: #563d7c;
    }

    &.sass {
      background: #a53b70;
    }
  }
`

export const TagLicense = styled(TagLang)`
  svg {
    font-size: 1rem;
    margin-right: .2rem;
  }
`;