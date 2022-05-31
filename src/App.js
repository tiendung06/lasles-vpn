import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./layout/Hero";
import Intro from "./layout/Intro";
import Feature from "./layout/Feature";
import Plan from "./layout/Plan";
import Partner from "./layout/Partner";
import Customer from "./layout/Customer";

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
              <Plan></Plan>
              <Partner></Partner>
              <Customer></Customer>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
