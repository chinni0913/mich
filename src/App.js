import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import PreLoader from './Components/PreLoader';
import ScrollButton from './Components/ScrollButton';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/service' element={<Services />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <PreLoader />
        <ScrollButton />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
