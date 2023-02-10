import {Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Navbar from './pages/components/Navbar';
import Create from './pages/create/Create';
import Display from './pages/display/Display';
import Contact from './pages/components/Contact';
import MayorContact from './pages/components/MayorContact';
import About from './pages/components/About';
import SingleCrime from './pages/singleBook/SingleCrime';
function App() {

  return (
    <div className="App h-screen w-full">
      <div className="w-full">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Create></Create>}></Route>
          <Route exact path="/stat" element={<Display></Display>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/mayorcontact" element={<MayorContact></MayorContact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="crimes/:id" element={<SingleCrime></SingleCrime>}></Route>          
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
