import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route path="/contacto" exact component={Contacto} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
