import { lazy, Suspense } from "react";

// Miscellaneous
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RingLoader } from "react-spinners";

//
import Navbar from "./components/Navbar/Navbar";

// Pages
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/Registration")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <section className="flex flex-col items-center justify-center min-h-screen">
              <RingLoader color="#3a6afd" />
            </section>
          }
        >
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<RegistrationPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
