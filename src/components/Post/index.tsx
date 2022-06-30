import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Comment } from '../Comment';
import { Container, Header, Content, FormContainer, CommentList} from "./styles";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author:Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
 const [ comments, setComments ] = useState([
  'Post muito bacana, hein!?'
 ]);

  const [ newCommentText, setNewCommentText ] = useState('');
 
  const publishedAtDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { 
    locale: ptBR,
   })

  const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
   })

  function handleCreateNewComment(event: FormEvent) {
  event.preventDefault() 
  setComments([...comments, newCommentText]);
  setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity('');
  setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
  const commentsWithoutDeleteOne = comments.filter(comment =>{
    return comment !== commentToDelete
  })
  setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return( 
    <Container className="post">
      <Header>
        <div className="author">
        <img src={author.avatarUrl} />
        <div className="authorInfo">
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
        </div>
      <time title={publishedAtDateFormat} dateTime={publishedAt.toISOString()}>
        {publishedAtDateRelativeToNow}
      </time>
      </Header>
      <Content>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
          
      </Content>
      <FormContainer>

        <form onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
         <button 
          type="submit" disabled={isNewCommentEmpty}>
            Publicar
         </button>
        </footer>
        </form>

      </FormContainer>

      <CommentList>
        {comments.map(comment => {
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />)
        })}
      </CommentList>
   
    </Container>
  )
}