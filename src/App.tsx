import { Header } from "./components/Header/index.jsx";
import { Post } from "./components/Post/index.jsx";
import { Sidebar } from "./components/Sidebar/index.jsx";
import { GlobalStyle } from "./styles/global";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/jaquelinepires.png",
      name: "Jaqueline Pires",  
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👏', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-29 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/priucodes.png",
      name: 'Priscilla Ribeiro',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👏', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-30 17:00:00'),
  }
]
export function App() {
   return (
    <div>
      <Header />

      <div className="wrapper">
       <Sidebar />
        <main>
          {posts.map(post => {
          return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
      <GlobalStyle />
    </div>
  )
}

