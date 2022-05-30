import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./layout/Hero";
import Intro from "./layout/Intro";
import Feature from "./layout/Feature";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Hero></Hero>
              <Intro></Intro>
              <Feature></Feature>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
