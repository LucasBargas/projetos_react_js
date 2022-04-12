import styled from 'styled-components';

export const InternalNavContainer = styled.section`
  padding-top: 1.5rem;
  border-bottom: 1px solid #30363d;
  display: flex;
  justify-content: flex-end;

  nav {
    font-size: .875rem;
    width: 70%;

    ul {
      display: flex;

      a {
        display: flex;
        align-items: center;
        padding: 8px 16px 16px 16px;
        border-bottom: 2px solid transparent;
        color: #bbbbbb;

        &:hover {
          border-bottom-color: #6e7681;
        }

        span {
          position: relative;
          top: 2px;
          margin-right: 6px;
          font-size: 1rem;
        }

        &.active {
          border-bottom-color: #F78166;
          color: #f0f0f0;
        }
      }
    }
  }
`;