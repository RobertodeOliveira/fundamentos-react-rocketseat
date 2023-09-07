/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import S from './Post.module.css'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
// import { posts } from '../../mock/posts'

const comments = [ 1 ]

export function Post({ author, publishedAt, content }) {

  const publishedDateFormatted = format(publishedAt,  "dd 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR,
  })
  //Variável que irá receber a informação de data. A mesma armazenará e aplicará o método
  console.log('===>', publishedDateFormatted)

  //A forma a baixo é o método de exbição da data relativa a dara atual.. Ou seja: ex -> a cerca de 2 dias.
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  }) 

  console.log('===>', publishedDateRelativeNow)

  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>  
          <Avatar hasBorder src={author.avatarUrl}/> 
          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
      </header>
      <div className={S.content}>
      {content.map((line, index) => {
        if(line.type === 'paragraph') {
          return <p key={index}>{line.content}</p>
        } else if (line.type === 'link') {
          // eslint-disable-next-line react/jsx-key
          return  <p><a href="">{line.content}</a></p>
        }
      })}
      </div>
      <form className={S.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário' />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>
      <div>
      {comments.map(comment => {
          // eslint-disable-next-line react/jsx-key
          return <Comment />
        })}
      </div>
      
    </article>
  )
}

//date fns ou intl
