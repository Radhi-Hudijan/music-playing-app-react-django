import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomJoinPage from "./pages/RoomJoinPage";
import CreateRoomPage from "./pages/CreateRoomPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<RoomJoinPage />} />
        <Route path='/create' element={<CreateRoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
