import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopBar from './components/TopBar/TopBar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import GalleryPage from "./pages/Gallery"
import ProductPage from "./pages/Product"
import ArtPage from "./pages/Art"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <TopBar title="Sorry for hurting your eyes" />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/art" element={<ArtPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
