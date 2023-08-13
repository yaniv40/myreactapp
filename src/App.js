import {HashRouter as BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './COMPONENTS/Home';
import Next from './COMPONENTS/Next';
import Menu from './COMPONENTS/Menu';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Menu/>
      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/next' element={<Next/>}/>


      </Routes>
      
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
