import './App.css'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import HomePage from './Pages/Home';
import Courses from './Pages/Courses';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import Header from './component/Header';

function App() {


  return (
  <>
  <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/courses'  element={<Courses/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
