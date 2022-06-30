import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  img{
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }

.commentBox {
  flex: 1;
}
.commentContent {
  background: ${props => props.theme.colors.commentBox};
  border-radius: 8px;
  padding: 1rem;
}

header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;  
}

.authorAndTime strong{
  display: block;
  font-size: 0.875rem;
  line-height: 1.6rem;
  color:${props => props.theme.colors.strong};
}
.authorAndTime time{
  display: block;
  font-size: 0.75rem;
  line-height: 1.6rem;
  color: ${props => props.theme.colors.span};
}
.commentContent header button {
  background: transparent;
  border: 0;
  color: ${props => props.theme.colors.span};
  cursor: pointer;
  line-height: 0;
  border-radius: 2px;  
  }

  .commentContent header button:hover {
    color: var(--red-500);
  }
  .commentContent p{
    margin-top: 1rem;
    color: ${props => props.theme.colors.paragraph};
  }
  .commentBox footer{
    margin-top: 1rem;
  }
  .commentBox footer button{
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.span};
    cursor: pointer;

    display: flex;
    align-items: center;
  }
  .commentBox footer button:hover {
    color: var(--orange-300);
  }
  .commentBox footer button svg{
    margin-right: 0.5rem;
  }
  .commentBox footer button span::before {
    padding: 0 0.25rem;
  }
`;
