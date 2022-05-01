import styled from "styled-components";

export const PinnedContainer = styled.section`
  padding-top: 2rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.MainFontColor};
  }
`;

export const PinnedRepos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: .5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const PinnedRepoCard = styled.div`
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.BorderColor};

  p {
    color: ${({ theme }) => theme.colors.GrayColor};
    font-size: .75rem;
    margin: .5rem 0 .25rem 0;
  }
`;

export const RepoTitle = styled.div`
  font-size: .875rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  svg {
    color: ${({ theme }) => theme.colors.GrayColor};
  }

  a {
    color: ${({ theme }) => theme.colors.LinkColor};

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    padding: .12rem .5rem;
    color: ${({ theme }) => theme.colors.GrayColor};
    border: 1px solid ${({ theme }) => theme.colors.BorderColor};
    border-radius: 2rem;
    font-size: .75rem;
  }
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 10px;
    height: 10px;
    margin-right: .2rem;
    border-radius: 50%;

    &.html {
      background: #e34c26;
    }

    &.js {
      background: #f1e05a;
    }

    &.sass {
      background: #a53b70;
    }
  }
`;