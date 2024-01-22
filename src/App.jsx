import About from './components/About'
import Educaion from './components/Education'
import Footer from './components/Footer'
import Front from './components/Front'
import Nav from './components/Nav'
import Service from './components/Service'
import Skill from './components/Skill'


export default function App(){
  return(
    <>
    <div className="container">
    <Nav />
    <Front />
    </div>
    <About />
    <Educaion />
    <Skill />
    <Service />
    <Footer />
    </>
  )
}