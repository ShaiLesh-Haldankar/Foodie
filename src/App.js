import React from 'react';
import './App.css';
import  Navbar  from './components/navbar';
import  Content  from './components/content';
import Section_1 from './components/section_1';
import Section_2 from './components/section_2';
import Contact from './components/contact';

function App() {
  return (
    <div>
    <div className="main__header">
      <Navbar />
      <Content />
      

    </div>

    <Section_1 />
    <Section_2 />
    <Contact />
    </div>
  );
}

export default App;
