import '../styles/index.scss'
import Recipes from './Recipes'
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

const App = () => {
  // Using parentheses when returning is necessary 
  // if you want to write your return statement over several lines  
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi, React App!</h1>
        </section>
        <img src={sword} alt="sword" width="250"/>
        <img src={swordSvg} alt="sword" width="250"/>
        <Recipes />
      </main>

    </>
  )
}

export default App
