import './global.css'
import S from './App.module.css'
import { Header } from './components/Header/Header'
import { Post } from './components/Posters/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
    <div>
      <Header />
      <div className={S.warppaer}>
        <Sidebar />        
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
