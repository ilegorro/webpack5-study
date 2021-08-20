import '../styles/index.scss'
import Recipes from './Recipes'

const App = () => {
  //Using parentheses when returning is necessary if you want to write your return statement over several lines  
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi, React App!</h1>
        </section>
      </main>

      <Recipes />
    </>
  )
}

export default App
