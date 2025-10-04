import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Page from "./components/Page";
import TransitionProvider from "./components/TransitionProvider";
import { lazy, Suspense } from "react";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Cars = lazy(() => import("./pages/Cars"));
const CarDetail = lazy(() => import("./pages/CarDetail"));
const Team = lazy(() => import("./pages/Team"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <TransitionProvider carSrc="/foranimation.jpg" duration={0.2} carHeight={140}>
      <div className="flex flex-col min-h-screen bg-brand-dark">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow pt-20 md:pt-24">
          <Suspense fallback={<div className="py-10 text-center">Loading…</div>}>
            <Routes>
              <Route path="/" element={
                <Page title="E-FAR | Home" description="E-Formula Ashwa Riders – electric formula racing team."><Home /></Page>
              } />
              <Route path="/about" element={<Page title="About | E-FAR"><About /></Page>} />
              <Route path="/cars" element={<Page title="Cars | E-FAR"><Cars /></Page>} />
              <Route path="/cars/:id" element={<Page title="Car Detail | E-FAR"><CarDetail /></Page>} />
              <Route path="/team" element={<Page title="Team | E-FAR"><Team /></Page>} />
              <Route path="/achievements" element={<Page title="Achievements | E-FAR"><Achievements /></Page>} />
              <Route path="/sponsors" element={<Page title="Sponsors | E-FAR"><Sponsors /></Page>} />
              <Route path="/contact" element={<Page title="Contact | E-FAR"><Contact /></Page>} />
              <Route path="*" element={<Page title="404 | E-FAR"><NotFound /></Page>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      </TransitionProvider>
    </Router>
  );
}

export default App;