import { Comment } from '../Comment/Comment'
import S from './Post.module.css'

export function Post() {
  return (
    <article className={S.post}>
      <div className={S.header}>
        <div className={S.profile}>
            <img src='https://avatars.githubusercontent.com/u/110266894?v=4' className={S.avatar} />
            <div>
              <p className={S.name}>Christian Valentim</p>
              <p className={S.profission}>Dev Frontend</p>
            </div>
        </div>
          <div className={S.status}><p>Publicado em 1h</p></div>
      </div>
      <main className={S.content}>
        <p> Fala galeraa </p>
        <p> 👋 Acabei de subir mais um projeto no meu portifa. </p>
        <p>  É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <div className={S.author}>
            <a className={S.anchor} href="https://github.com/RobertodeOliveira">👉 Jane.desing/doctorcare</a>
          <p className={S.portfolio}>  
            <a  className={S.anchor}href="">#novoprojeto</a>{' '} 
            <a  className={S.anchor}href="">#nlw</a> {' '}
            <a className={S.anchor} href="">#rocketseat</a> {' '}
          </p>
        </div>
        <p></p>
      </main>
      <footer >
        <p className={S.mensagem}>Deixe seu Feedback</p>
        <input className={S.input} type="text" placeholder='Nossa, adorei amigo!' />
      </footer>
      <Comment />
      <Comment />
    </article>
  )
}