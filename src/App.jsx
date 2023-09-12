import { lazy, Suspense } from "react";

// Miscellaneous
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RingLoader } from "react-spinners";

// Pages
const Homepage = lazy(() => import("./pages/Homepage/Home"));
const Aboutpage = lazy(() => import("./pages/Aboutpage/About"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <section className="flex flex-col items-center justify-center min-h-screen">
              <RingLoader color="#3a6afd" />
            </section>
          }
        >
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
