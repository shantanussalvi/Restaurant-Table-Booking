import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu,BookTable } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <BookTable />
    <Chef />
    <Intro />
    {/* <Laurels /> */}
    <Gallery />
    <AboutUs />
    <FindUs />
    <Footer />
  </div>
);

export default App;
