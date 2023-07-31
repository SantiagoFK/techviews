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
    <div className="App">
      <Router>
        {/* NAVBAR SECTION */}
        <header className="header">
          <Navbar></Navbar>
        </header>

        {/* PAGES SECTION */}
        <main className="main">
          
          <Routes>
            <Route path='/' Component={Home}>
            </Route>

          </Routes>
        </main>

        {/* FOOTER SECTION */}
        <footer className="footer">
          <Footer></Footer>
        </footer>
      </Router>
    </div>
  );
}

export default App;
