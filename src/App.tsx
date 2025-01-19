import LineBreak from "./components/LineBreak"
import Navigation from "./components/Navigation"
import Connect from "./components/Connect"
import Projects from "./components/Projects/index"
import Hero from "./components/Hero/index"
import Code from "./components/Code/index"
import About from "./components/About/index"


function App() {

  return (
    <main className="bg-black font-geistMono  py-10 px-20  ">
      <Navigation/>

      
      <Hero/>
      <LineBreak/>

     
      <About/>
      <LineBreak/>

      
      <Code/>
      <LineBreak/>

      
      <Projects/>
      <LineBreak/>

      
      <Connect/>

    </main>
  )
}

export default App
