import './App.css';
import { Usestate } from './day2/Usestate';
import MainRoute from './main/MainRoute';



// import Demo from './day1/Demo'; //default import
// import {Demo} from './newcom/Demo'    named import
const App=()=> {
  return (
    <div className="App">
      <Usestate/>
      <MainRoute/>
    </div>
  );
}

export default App;
