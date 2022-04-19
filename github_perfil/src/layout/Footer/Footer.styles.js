import styled from "styled-components";
import * as Variables from '../../styles/Variables';

export const FooterArea = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid ${Variables.BorderColor};
  font-size: .75rem;
  padding: 40px 0;
  margin-top: 20px;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const GithubCopy = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;

  @media (max-width: 1024px) {
    margin-right: 2.25rem;
  }

  @media (max-width: 820px) {
    margin: 1rem 0 0 0;
  }

  img {
    width: 24px;
    height: 23.72px;
  }

  span {
    display: inline-block;
    margin-left: .75rem;
    color: ${Variables.GrayColor};
  }
`;

export const FooterNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2.25rem;

    @media (max-width: 820px) {
      gap: 1.25rem;
    }

    a {
      color: ${Variables.LinkColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;