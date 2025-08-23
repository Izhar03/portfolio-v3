import TopBar from './components/TopBar/TopBar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar title="Sorry for hurting your eyes" />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
