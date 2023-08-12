import { ThumbsUp, Trash } from 'phosphor-react'
import S from './Comment.module.css'

export function Comment(){ 
  return( 
    <div className={S.comment}>
      <img className={S.avatar} src="https://avatars.githubusercontent.com/u/110266894?v=4" alt="" />
        <div className={S.commentWrapper}>
          <div className={S.commentBox}>
            <div className={S.commentContent}>
              <header>
                <div>
                  <p className={S.author}>Roberto Melo (você)</p>
                  <p className={S.time}>Cerca de 2h</p> 
                </div>
                <button title='Detelar comentário'>
                <Trash size={15} />
                </button>
              </header>
              <div className={S.commentMessage}>
                <p>Muito bom, Devon! Parabéns</p>
              </div>
            </div>  
          </div> 
            <div className={S.buttonInteractive}>  
              <button>
              <ThumbsUp size={20} /> Apaudir . 03
              </button>
            </div> 
        </div>
    </div>
  )
}