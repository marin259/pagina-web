import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticleContainer } from "./components/ArticleContainer"

function App() {
   return (
    <main className="px-4 pt-6 ">
      <Header/>
      <diV className= "lg:flex lg:gap-8">
        <MainArticle />
       <NewContainer />
      </diV>
      <ArticleContainer />
    </main>
  )
}

export default App
