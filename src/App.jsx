import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopBar from './components/TopBar/TopBar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import GalleryPage from "./pages/Gallery"
import ProductPage from "./pages/Product"
import ArtPage from "./pages/Art"

function App() {

  const topBarTitle = [
    <span key="download" className="flex items-center gap-2">
      No time for website and want a 6 second glance into my resume? :
      <a
        href="https://drive.google.com/file/d/1OTv6Z6eNXhJg22D8Mhh-y5Pl_QjLXRpM/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Resume Link
      </a>
    </span>,
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <TopBar title={topBarTitle}/>
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
