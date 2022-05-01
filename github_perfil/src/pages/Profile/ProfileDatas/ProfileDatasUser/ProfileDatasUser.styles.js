import styled from 'styled-components';

export const Datas = styled.div`
  p, a, li, button, span, strong, svg {
    color: ${({ theme }) => theme.colors.MainFontColor};
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
    background: ${({ theme }) => theme.colors.DarkBtnColor};
    border-radius: 6px;
    transition: .2;

    &:hover {
      background: ${({ theme }) => theme.colors.BorderColor};
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
      color: ${({ theme }) => theme.colors.LinkColor};
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
    color: ${({ theme }) => theme.colors.GrayColor};
    font-size: .875rem;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.LinkColor};

    svg, strong {
      color: ${({ theme }) => theme.colors.LinkColor};
    }
  }
`;