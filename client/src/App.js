import Form from "./Component/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebSocketData } from "./Component/socket/socket";

const WEBSOCKET_URL = "ws://localhost:8000";

function App() {
  const [getProducts] = WebSocketData(WEBSOCKET_URL);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home getProducts={getProducts} />} />
          <Route path="/register" element={<Form />} />
          <Route path="*" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
