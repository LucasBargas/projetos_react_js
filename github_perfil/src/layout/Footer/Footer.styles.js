import styled from "styled-components";

export const FooterArea = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.BorderColor};
  font-size: .75rem;
  padding: 40px 0;
  margin-top: 20px;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

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
    color: ${({ theme }) => theme.colors.GrayColor};
  }
`;

export const FooterNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.25rem;

    @media (max-width: 820px) {
      gap: 1.25rem;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }

    a {
      color: ${({ theme }) => theme.colors.LinkColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  padding-top: 1rem;

  @media (max-width: 820px) {
    padding-top: .5rem;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.GrayColor};
    
    a {
      color: ${({ theme }) => theme.colors.LinkColor};
      font-weight: 700;
    }
  }
`;