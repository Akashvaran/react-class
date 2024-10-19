
import './App.css';
import { About } from './childern/About';
import { Contact } from './childern/Contact';
import { Fooder } from './childern/Fooder';
import { Home } from './childern/Home';
import  { MainRouding } from './childern/MainRouding';
import { Service } from './childern/Service';
// import { MainRouding } from './childern/MainRouding';
// import { Child1 } from './context/Child1';
// import { Header } from './props/Header';



function App() {
  return (
    <div>
      {/* <Header/> */}

      {/* <Child1/> */}

      <MainRouding>
        <Home />
        <About />
        <Service />
        <Contact />
        <Fooder />
      </MainRouding>
      
    </div>
  );
}

export default App;
