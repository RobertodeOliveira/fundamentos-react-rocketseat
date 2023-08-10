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
        <p> 👉 jane.design/doctorcare #novoprojeto #nlw #rocketseat</p>
        <p>
          Christian Frontend Develop
        </p>
      </main>
      <footer>
        
      </footer>
    </article>
  )
}