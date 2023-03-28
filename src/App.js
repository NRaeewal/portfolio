import './App.css';
import NavigationBar from './Navigation';
import About from './About';
import Resume from './resume';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
