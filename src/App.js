import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
