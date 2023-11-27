import './App.css'
import Header from './components/header/Header'
import RightsSection from './components/RightsSection'
import HelpSection from './components/HelpSection'
import Methods from './components/Methods'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className={'app'}>
        <Header />
        <Home />
        <Methods />
        <RightsSection />
        <HelpSection />
        <Footer />
      </div>
    </>
  )
}

export default App
