import { Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar onSearch={setSearch} />
      <Outlet context={{ search }} />
      <Footer />
    </div>
  );
}

export default App;
