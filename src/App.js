import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import PreLoader from './Components/PreLoader';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/service' element={<Services />}/>
          <Route exact path='/portfolio' element={<Portfolio />}/>
          <Route exact path='/blog' element={<Blog />}/>
          <Route exact path='/contact' element={<Contact />}/>
        </Routes>
        {/* <PreLoader /> */}
        <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
