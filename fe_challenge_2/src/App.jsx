import './App.css'
import NavBar from './components/NavBar'
import Back from './components/Back'
import Body from './components/Body'
import Horizons from './components/Horizons'
import Footer from './components/Footer'
import Templates from './components/Templates'
function App() {

    return (
        <>
            <NavBar />
            <div className="container mt-10">
                <Back />
                <Horizons />
                <Body />
                <Templates />
                <Back top={true} />
            </div>
            <Footer />
        </>
    )
}

export default App
