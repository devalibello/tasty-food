import './App.css';
import Navbar from './components/Homepage/Navbar'
import Banner from './components/Homepage/Banner'
import Menu from './components/Homepage/Menu'
import About from './components/Homepage/About'
import Offer from './components/Homepage/Offer'
import Delivery from './components/Homepage/Delivery'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Menu />
      <About />
      <Offer />
      <Delivery />
    </>
  );
}

export default App;
