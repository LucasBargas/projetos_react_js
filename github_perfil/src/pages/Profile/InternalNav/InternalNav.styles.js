import styled from 'styled-components';

export const InternalNavContainer = styled.section`
  border-bottom: 1px solid #30363d;
  grid-column: 1 / 5;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    grid-column: 1 / 4;
  }

  @media (max-width: 480px) {
    padding-top: 1rem;
    order: 2;
  }

  nav {
    font-size: .875rem;
    width: 72%;
    overflow-x: auto;

    @media (max-width: 1024px) {
      width: 65%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }

    ul {
      display: flex;

      a {
        display: flex;
        align-items: center;
        padding: 8px 16px 16px 16px;
        border-bottom: 2px solid transparent;
        color: #c9d1d9;

        &:hover {
          border-bottom-color: #6e7681;
        }

        span {
          position: relative;
          top: 2px;
          margin-right: 6px;
          font-size: 1rem;
          color: #c9d1d9;

          @media (max-width: 480px) {
            display: none;
          }
        }

        &.active {
          border-bottom-color: #F78166;
          color: #f0f0f0;
        }
      }
    }
  }
`;