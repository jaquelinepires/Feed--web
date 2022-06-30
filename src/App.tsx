import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState.js";
import  Header  from "./components/Header";
import { Post } from "./components/Post/index.jsx";
import { Sidebar } from "./components/Sidebar/index.js";
import { GlobalStyle } from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

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
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  }
   return (
      <ThemeProvider theme={theme}>
    <div>
      <Header toggleTheme={toggleTheme}/>

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
      </ThemeProvider>
  )
}

