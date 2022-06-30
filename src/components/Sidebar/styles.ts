import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;

  img{
    width: 100%;
    height: 72px;
    object-fit: cover;
  }
  `;

  export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);
    
    img{
      width: calc(3rem + 12px);
        height: calc(3rem + 12px);
        border-radius: 8px;
        border: 4px solid var(--gray-800);
        outline: 2px solid var(--orange-500);
    }
    strong{
      margin-top: 1rem;
      color: ${props => props.theme.colors.strong};
      line-height: 1.6rem;
    }

    span{
      font-size: 0.875rem;
      color: ${props => props.theme.colors.span};
      line-height: 1.6rem;
    }
`;

export const Footer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;

  a{
    background: transparent;
    color: var(--orange-500);
    border: 1px solid var(--orange-500);
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: color 0.1s, background-color 0.1s;
  }

  a:hover {
    background: var(--orange-500);
    color: var(--white);
  }
`;

