import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import ChatRoom from './components/ChatRoom.tsx';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat-room" element={<ChatRoom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
