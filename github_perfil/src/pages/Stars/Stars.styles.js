import styled from 'styled-components';
import * as Variables from '../../styles/Variables';

export const StarsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Variables.MainFontColor};
  
  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const StarsContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid ${Variables.BorderColor};
  border-radius: 4px;
  padding: 80px 40px;
  text-align: center;
  color: ${Variables.MainFontColor};

  svg {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 1rem 0 1.25rem 0;
  }

  p {
    font-size: .875rem;
    line-height: 1.5;

    a {
      color: ${Variables.LinkColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const StarLegend = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-top: 1rem;
  font-size: .75rem;

  p {
    font-size: .75rem;
    color: ${Variables.GrayColor};

    a {
      color: ${Variables.LinkColor};
    }
  }
`;