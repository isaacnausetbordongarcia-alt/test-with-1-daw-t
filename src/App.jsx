import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Fruits from "./pages/fruits/Fruits";
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home />}></Route>
      <Route path="fruits" element={<Fruits />}></Route>
      <Route path="*" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
  
}

export default App
