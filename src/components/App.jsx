import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("../pages/HomePage"));
const NotesPage = lazy(() => import("../pages/NotesPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
