import './App.css';
import Hero from './components/hero/Hero';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <div>
           <Router>
              <Hero/>
              <div className='content' style={{}}>
                <AnimatedRoutes/>
              </div>
           </Router>
    </div>
  );
}

export default App;
