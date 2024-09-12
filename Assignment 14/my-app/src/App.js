import Navbar from "./components/navbar/Navbar";
import Home from "./components/home-sec/Home"
import About from "./components/about-sec/About"
import Card from './components/card/Card';
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Card/>
    <Work/>
    <Contact/>   
    <Footer/>
    </>
  );
}

export default App;