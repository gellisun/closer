import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from '../src/pages/Signin';
import Login from '../src/pages/Login';
import Chat from '../src/pages/Chat';
import SetAvatar from '../src/components/SetAvatar';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/signin' element={<Signin />} />
    <Route path='/login' element={<Login />} />
    <Route path='/setavatar' element={<SetAvatar />} />
    <Route path='/' element={<Chat />} />
  </Routes>
  </BrowserRouter>
}
