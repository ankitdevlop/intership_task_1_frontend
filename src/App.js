
import Home from './Componets/pages/Home'

import Info from './Componets/pages/Info'
import Questions from './Componets/pages/Questions'
import Header from './Componets/Header/Header'
import './App.css';
import User from '../src/Componets/User/User'
import Auth from './Componets/Auth/Auth'

import Sidebars from './Componets/Header/Sidebar/Sidebars';
import { Route, Routes } from 'react-router-dom';
import QuestionsDetail from './Componets/pages/QuestionsDetail'
import AskQuestion from './Componets/pages/AskQuestion'
import Footer from './Componets/Footer'






function App() {
 
  return (
    <div className="App">
  
      <Header/>
      <Sidebars/>

      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/header' element={<Header/>} />
<Route path='/info' element={<Info/>}/>
<Route path='/auth' element={<Auth/>}  />
<Route path='/user' element={<User/>}/>

<Route path='/questions' element={<Questions/>}  />
<Route path='/detailQuestion' element={<QuestionsDetail/>} />
<Route path='/Askquestions'  element={<AskQuestion/>}/>


<Route/>
<Route/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
 