import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Auth from './pages/Auth'
import MyPhones from './pages/MyPhones'
import AllPhones from './pages/AllPhones'
import Header from "./elements/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/myphones' element={<MyPhones/>}/>
        <Route path='/allphones' element={<AllPhones/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
