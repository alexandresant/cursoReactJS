import { Post } from "./components/Post"
import "./global.css"
import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import imgUser1 from './assets/user1.png'
import imgUser from './assets/user.png'
import { id } from "date-fns/locale"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: imgUser,
      name: 'Alexandre Bührer',
      role: 'Software Enginer'
    },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: '👉 Alexandre dos Santos Bührer'},
  ],
  publishdAt: new Date('2025-05-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: imgUser1,
      name: 'Evelin Mary',
      role: 'Adimistrator'
    },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: '👉 Alexandre dos Santos Bührer'},
  ],
  publishdAt: new Date('2025-05-22 15:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishdAt={post.publishdAt}
              />
          )
          })}
        </main>
      </div>
    </div>
  )
}
