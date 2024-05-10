import React, {useState, useEffect} from 'react';
import './App.css';
import { GlobalStateProvider } from './components/GlobalState.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TodoWrapper from './components/TodoWrapper.js';
import Sidebar from './components/Sidebar.js';
import Home from './components/Home.js';
import Cases from './components/standard/Cases.js';
import Events from './components/standard/Events.js';
import Dealers from './components/standard/Dealers.js';
import BackOffice from './components/standard/BackOffice.js';
import RemoteSupport from './components/standard/RemoteSupport.js';
import Contact from './components/standard/Contact.js';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      closeSidebar();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSidebar && !event.target.closest('.Sidebar') && !event.target.classList.contains('hamburger-menu')) {
        closeSidebar();
      }
    };

    if (showSidebar) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <GlobalStateProvider>
      <Router basename='/assessmentMrWinston'>
        <div className="App">
          {!isMobile && <Sidebar />}
          
          {isMobile && !showSidebar && (
            <div className="hamburger-menu" onClick={toggleSidebar}>
              &#9776;
            </div>
          )}

          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/todo" element={<TodoWrapper />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/events" element={<Events />} />
              <Route path="/dealers" element={<Dealers />} />
              <Route path="/backoffice" element={<BackOffice />} />
              <Route path="/remotesupport" element={<RemoteSupport />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </div>

          {isMobile && showSidebar && <Sidebar handleLinkClick={handleLinkClick} />}
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
