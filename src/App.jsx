import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <section
              className="relative h-screen bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-8 text-white">

                  <span className="bg-pink-600 px-4 py-2 rounded-full">
                    🔥 Summer Sale 50% OFF
                  </span>

                  <h1 className="text-6xl font-bold mt-6">
                    Discover Your <br />
                    Perfect Style
                  </h1>

                  <p className="mt-6 text-xl max-w-lg">
                    Shop the latest fashion collection with premium quality.
                  </p>

                  <button className="mt-8 bg-pink-600 px-8 py-3 rounded-lg">
                    Shop Now
                  </button>

                </div>
              </div>
            </section>
          }
        />

        <Route
          path="/shop"
          element={<h1 className="text-5xl text-center mt-20">Shop Page</h1>}
        />

        <Route
          path="/categories"
          element={<h1 className="text-5xl text-center mt-20">Categories Page</h1>}
        />

        <Route
          path="/about"
          element={<h1 className="text-5xl text-center mt-20">About Page</h1>}
        />

        <Route
          path="/contact"
          element={<h1 className="text-5xl text-center mt-20">Contact Page</h1>}
        />

      </Routes>
    </>
  );
}

export default App;