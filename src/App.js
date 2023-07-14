import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { HomePage } from "./pages/Home/HomePage";
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/minhas-pastas" element={<MinhasPastasPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
