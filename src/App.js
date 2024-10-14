import Header from './Frontpage/Header';
import Front from './Frontpage/Front';
import Content3 from './Frontpage/Content3';
import Footer from './Frontpage/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Frontpage/Admin';
import AdminDisplay from './Frontpage/AdminDisplay';
import Getsupport from './Frontpage/Getsupport';
import Donatelogin from './Frontpage/Donatelogin';
import Donation from './Frontpage/Donation';
import Contact from './Frontpage/Contactus';
import Gethelp from './Frontpage/Gethelp';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/donatelogin" element={<Donatelogin/>}></Route>
      <Route path="/admindisplay" element={<AdminDisplay/>}></Route>
      <Route path="/getsupport" element={<Getsupport/>}></Route>
      <Route path="/donation" element={<Donation/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/gethelp" element={<Gethelp/>}></Route>
      
      </Routes>
    </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <Front/>
    <Content3 />
    <Footer/>
  </div>
);

export default App;
