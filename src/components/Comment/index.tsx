import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Container } from './styles';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps) {
  const [ likeCount, setLikeCount ] = useState(0);
 
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLinkComment() {
    setLikeCount((state) =>{
    return state+ 1
  });
  }
  return (
    <Container>
     <img src="https://github.com/jaquelinepires.png" />
     <div className="commentBox">
      <div className="commentContent">
      <header>
        <div className="authorAndTime">
          <strong>Jaqueline Pires</strong>
          <time title="20 de Junho ás 09:10h" dateTime="2022-05-11 09:10:10">cerca de 1hs atrás</time>
        </div>
        
        <button
        onClick={handleDeleteComment} 
        title="Deletar comentário">
          <Trash size={24} />
        </button>
      </header>
      <p>{content}</p>
      </div>
    <footer>
      <button onClick={handleLinkComment}>
        <ThumbsUp />
        Aplaudir ╴ <span>{likeCount}</span>
      </button>
    </footer>
    </div>
    </Container>
  );
};

