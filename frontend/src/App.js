import { 
  BrowserRouter as Router, 
  Routes, 
  Route} from 'react-router-dom';

//components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
