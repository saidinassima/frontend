import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import { NewsMenuPage } from "./pages/NewsMenuPage";
import { UserMenuPage } from "./pages/UserMenuPage";
import { NewsByIdPage } from "./pages/NewsByIdPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { FilterNewsPage } from "./pages/FilterNewsPage";
import { Footer } from "./components/Footer";
import { RegistedPage } from "./pages/RegistedPage";

function App() {
  return (
    <main className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewsMenu" element={<NewsMenuPage />} />
        <Route path="/UserMenu" element={<UserMenuPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registed" element={<RegistedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/UserNews" element={<NewsByIdPage />} />
        <Route path="/FilterNews" element={<FilterNewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
