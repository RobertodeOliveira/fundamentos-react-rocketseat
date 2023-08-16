/* eslint-disable react/jsx-no-comment-textnodes */
// import { Avatar } from '../Avatar/Avatar'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import S from './Post.module.css'

export function Post() {
  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>  
          <Avatar hasBorder src='https://avatars.githubusercontent.com/u/67019242?v=4' /> 
          <div className={S.authorInfo}>
            <strong>Roberto Melo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime='14/18/2023 00:13'>Publicado a cerca de 1h</time>
      </header>
      <div className={S.content}>
        <p> Fala galeraa </p>
        <p> 👋 Acabei de subir mais um projeto no meu portifa. </p>
        <p>  É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p> 
        <p><a className={S.anchor} href="https://github.com/RobertodeOliveira">👉 Jane.desing/doctorcare</a></p> 
        <a  className={S.anchor}href="">#novoprojeto</a>{' '} 
        <a  className={S.anchor}href="">#nlw</a> {' '}
        <a className={S.anchor} href="">#rocketseat</a> {' '}
      </div>
      <form className={S.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário' />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>
      <Comment />
    </article>
  )
}
