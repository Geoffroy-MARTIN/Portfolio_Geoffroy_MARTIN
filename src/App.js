import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";

import Accueil from "./pages/Accueil/Accueil";
import APropos from "./pages/APropos/APropos";
import Competence from "./pages/Competences/competences";
import Project from "./pages/Projets/Projects";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <Router>
  <div className="app-container">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Competence" element={<Competence />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
    <Footer />
  </div>
</Router>

  );
}
