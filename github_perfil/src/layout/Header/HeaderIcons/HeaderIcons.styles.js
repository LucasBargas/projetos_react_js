import styled from 'styled-components';

export const HeaderIcons = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 820px) {
      gap: .75rem;
    }

    li {
      display: flex;
      align-items: center;

      &:nth-of-type(2),
      &:nth-of-type(3) {
        @media (max-width: 768px) {
          display: none;
        }
      }  

      &:hover {
        svg {
          color: #cccccc;
        }

        span {
          border-bottom: 5px solid #cccccc;
        }
      }

      svg {
        font-size: 1.25rem;
        cursor: pointer;
        color: #ffffff;
      }

      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
        border-radius: 50%;
        object-fit: cover;
      }

      span {
        margin-left: 2px;
        display: block;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #ffffff;
        transform: rotate(180deg);
        cursor: pointer;
      }
    }
  }
`;