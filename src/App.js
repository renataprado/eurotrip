import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Documents from "./documents/Documents";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/eurotrip"
          exact
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route path="/eurotrip/documents" element={<Documents />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
