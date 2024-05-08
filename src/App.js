import './App.css';
import Navbar from './components/Homepage/Navbar'
import Banner from './components/Homepage/Banner'
import Menu from './components/Homepage/Menu'
import About from './components/Homepage/About'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Menu />
      <About />
    </>
  );
}

export default App;
