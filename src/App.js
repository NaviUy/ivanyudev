import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './css/app.css'

function App() {

  return (
      <div className="App">
          <Nav/>
          <Home/>
          <Projects/>
          <Resume />
          <Contact />
          <Footer />
      </div>

  );
}

export default App;
