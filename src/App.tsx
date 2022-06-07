import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "./components/SVGIcons";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div className="h-screen w-screen flex items-center justify-center">
                <h2 className="text-6xl">Page Not Found</h2>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
