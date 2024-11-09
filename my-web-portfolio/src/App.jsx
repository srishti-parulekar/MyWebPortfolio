import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Acheivements } from './components/Acheivements/Acheivements';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Acheivements/>
      <Contact/>

    </div>
  )
}

export default App;
