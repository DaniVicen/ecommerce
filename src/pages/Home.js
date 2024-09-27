import ProductsListContainer from '../components/ProductsListContainer/ProductsListContainer'
import './Home.css'

const Home = () => {
    return(
        <div>
        <div className='general-container'>
            <div className='seccion-style'><img src="./birras.jpg"/></div>
            <div className='seccion-style'><img src="./galponcito.jpeg"/></div>
            
        </div>
        <div className='general-container'>
            <div className='seccion-style'><img src="./growlers.jpeg"/></div>
            <div className='seccion-style'><img src="./fond.jpg"/></div>
        </div>
        <div className='general-container'>
            <div className='seccion-style'><h1>Pensa global, consumí local! </h1></div>
            <div className='container-logos'>
                    <img src="/logo tacuara.png"/>
        </div>
            
            <div className='seccion-style'><h1>El Galpón de Tacuara</h1></div>
        </div>
        
        
        </div>
    )
}

export default Home