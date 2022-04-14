import styled from 'styled-components';

export const RepoListArea = styled.div`
  ul {
    li {
      border-top: 1px solid #21262d;
      border-bottom: 1px solid #21262d;
      padding: 1.5rem 0;
    }
  }
`;

export const ClearFilterMessage = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .875rem;
  padding: 1.25rem 0 !important;

  strong {
    font-weight: 500;
  }

  p {
    color: #8b949e;
    font-size: .875rem;
    width: 55%;
  }
`;

export const ClearFilterBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #58a6ff;

    button {
      background: #58a6ff;
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
    color: #ffffff;
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
    color: #58a6ff;
    font-size: 1.25rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: inline-block;
    font-size: .75rem;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid #30363d;
    border-radius: 2rem;
    color: #8b949e;
    padding: 0 7px;
    margin-left: .5rem;
  }
`;