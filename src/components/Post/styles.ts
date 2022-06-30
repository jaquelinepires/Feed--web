import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 2.5rem;

  & + .post{
    margin-top: 2rem;
  }

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--orange-500);
  }
time{
  font-size: 0.875rem;
  color: ${props => props.theme.colors.span};
 }
 .author{
  display: flex;
  align-items: center;
  gap: 1rem;
 }
 .authorInfo strong {
  display: block;
  color: ${props => props.theme.colors.strong};
  line-height: 1.6rem;
 }
 .authorInfo span{
  display: block;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.span};
  line-height: 1.6rem;
 }

`;

export const Content = styled.div`
  line-height: 1.6rem;
  color: ${props => props.theme.colors.paragraph};
  margin-top: 1.5rem;

  p{
    margin-top: 1rem;
  }
  a{
    font-weight: bold;
    color: var(--orange-500);
    text-decoration: none;
  }
  a:hover{
    color: var(--orange-300);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.border} ;

strong{
  line-height: 1.6rem;
  color: ${props => props.theme.colors.strong};
}
textarea{
  width: 100%;
  background-color: ${props => props.theme.colors.comment};
  border: 0;
  resize: none;
  height: 6rem;
  padding: 1rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.strong};
  line-height: 1.4rem;
  margin-top: 1rem;
}

footer{
  visibility: hidden;
  max-height: 0;
}
&:focus-within footer{
  visibility: visible;
  max-height: none;

}
button[type=submit]{
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: var(--orange-500);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.1s;

}
button[type=submit]:hover:not(:disabled):hover{
  background: var(--orange-300);

}
button:disabled{
  opacity: 0.7;
  cursor: not-allowed;
}
`;

export const CommentList = styled.div`
  margin-top: 2rem;
`;
