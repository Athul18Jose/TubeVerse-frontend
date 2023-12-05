import { Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Watch from './pages/Watch';
import Pnf from './pages/Pnf';
import Singlecategory from './pages/Singlecategory';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/history' element={<Watch></Watch>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
        <Route path='/single/category/:id' element={<Singlecategory></Singlecategory>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
