import './App.css';
import ExploreFoods from './components/ExploreFoods'
import FAQ from './components/FAQ'
import OurStory from './components/OurStory';
import AboutProducts from './components/AboutProduct';
import Counters from './components/Counters';
import Header from './components/Header';
import Nav from './components/Nav';
import Overlay from './components/Overlay';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div classNameName="App">
    <Nav/>
    <Header/>
    <Counters/>
    <AboutProducts/>
    <OurStory/>
    <ExploreFoods/>
    <FAQ/>
    <Overlay/>
    <Subscribe/>
    <Footer/>
     </div>
    </>
    
  );
}

export default App;
