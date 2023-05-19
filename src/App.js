import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Form from './component/form';
import Sub from './component/sub';
 
import {
 
  Routes,
  Route
} from "react-router-dom";
function App() {

 
  return (
  
  <Routes>
    <Route path='/' element={ <Home/>}/>
  <Route path="/apply" element={<Form />}></Route>
  <Route path="/sub/:id" element={<Sub />}></Route>
</Routes>
  );
}
 
export default App;
