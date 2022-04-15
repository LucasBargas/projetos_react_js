import styled from 'styled-components';
import * as Variables from '../../styles/Variables';

export const OverviewContainer = styled.section`
  border: 1px solid ${Variables.BorderColor};
  border-radius: 6px;
  padding: 1.5rem;
  color: ${Variables.MainFontColor};

  @media(max-width: 360px) {
    padding: 1rem;
  }

  h2 {
    font-size: 1.0625rem;
    font-weight: 400;
  }
`;

export const SmallText = styled.div`
  padding-bottom: 1.5rem;

  span {
    font-size: 12px;
    
    a {
      color: ${Variables.MainFontColor};

      &:hover {
        color: ${Variables.LinkColor};
      }
    }

    span {
      color: ${Variables.GrayColor};
    }
  }
`;

export const MainTitle = styled.div`
  padding-bottom: .3rem;
  border-bottom: 1px solid ${Variables.DarkBtnColor};

  h1 {
    font-weight: 400;
    font-size: 1.3125rem;

    @media(max-width: 320px) {
      font-size: 1.25rem;
    }
  }
`;

export const AboutUser = styled.div`
  padding: 1.5rem 0 1rem 0;
`;

export const UserStacks = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;

  img {
    width: 30px;
  }
`;

export const ContactsUser = styled.div`
  padding-top: 1.5rem;
`;

export const ContactsRow = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
`;

export const WebsiteUser = styled.div`
  padding-top: 1.5rem;

  a {
    display: inline-block;
    margin-top: 1rem;
    font-size: .875rem;
    color: ${Variables.LinkColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;