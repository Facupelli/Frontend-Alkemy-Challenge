import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { PlateDetail } from "./components/PlateDetail";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe/:id" element={<PlateDetail />} />
    </Routes>
  );
}

export default App;
