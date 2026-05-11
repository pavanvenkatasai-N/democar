import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollToTop } from "./components/ScrollToTop";
import { ServiceDetail } from "./pages/ServiceDetail";
import { useReveal } from "./hooks/useReveal";

const Home = () => {
    useReveal();
    return (
        <div data-testid="home-page" className="bg-white text-[#0A0A0A] overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Marquee />
                <Services />
                <Portfolio />
                <Testimonials />
                <About />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

function App() {
    useEffect(() => {
        document.title = "Honour Sports — Premium Car Stereo & Styling, Hassan";
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
