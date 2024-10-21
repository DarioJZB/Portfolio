import { Outlet } from 'react-router-dom';

import './App.css'
import NavTabs from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <header>
        <NavTabs />
      </header>
      <main>
        <Outlet />
      </main>
        <Footer />
    </div>
  );
}

export default App
