import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import WhyAone from './components/WhyAone/WhyAone'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import CTA from './components/CTA/CTA'
import Products from './components/Products/Products'

function App () {
  return (
    <div className='App'>
      <Nav/>
      {/* <Hero/>
      <WhyAone/>
      <About/>
      <CTA Title="Explore Our Menu"/> */}
      <Products/>
      <Footer/>
      

    </div>
  )
}

export default App
