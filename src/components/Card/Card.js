import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import CartContext from '../../context/CartContext'

const CardItem = (props) => {
    const { image, title, price, stock, categoryName, id, } = props
    
    const navigate = useNavigate()
    
    const [cantidad, setCantidad] = useState(1)
    
    const { darkTheme } = useContext(ThemeContext) 

    const { addProductToCart } = useContext(CartContext)
    
    return(
        <Card sx={{ maxWidth: 300,  borderRadius: 8 }} className={`item-card-container ${darkTheme ? 'dark-mode' : ''}`}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <p>
                            {categoryName}
                        </p>
                    </div>
                    <div>
                        <img
                            src={image ? `/${image}` : null}
                            resizeMode="stretch"
                        />
                    </div>
                    <p style={{
                        marginTop: 'auto'
                    }}>{title}</p>
                    <p>${price}</p>
                    <div>
                        <ItemCount
                            stock={stock} 
                            cantidad={cantidad}
                            setCantidad={setCantidad}    
                        />
                    </div>
                    <Button  
                            style={{
                                marginTop: 24,
                                backgroundColor: 'whitesmoke',
                                color: 'black',
                                borderRadius: '24px', 
                                height: '30px',
                                fontSize: '20px'
                            }}  
                            variant="contained" 
                            onClick={() => {
                                navigate(`/product/${id}`, {
                            state: props,
                            })
                    }}>
                        Ver detalle
                    </Button>
                    <Button
                        style={{
                            marginTop: 4,
                            backgroundColor: 'black',
                            color: 'whitesmoke',
                            borderRadius: '24px',
                            height: '40px',
                            fontSize: '18px'
                        }} 
                        variant={'contained'}
                        onClick={() =>addProductToCart(props)}
                    >
                            Agregar al pedido
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem