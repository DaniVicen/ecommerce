import ItemCount from "../ItemCount/ItemCount"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import './ItemDetail.css'
import { Button } from '@mui/material'
import { useState, useContext } from "react"
import CartContext from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({data}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)
    const navigate = useNavigate()
    const { addProductToCart } = useContext(CartContext)

    return (
        <div>
            <Card sx={{ minWidth: 100 }}>
            <CardContent>
                <div className="item-card">
                    <div>
                        <img src={`/${data.image}`}/>
                    </div>
                    <div className="item-cards">
                        <h1>{data.title}</h1>
                        <span>Precio unidad: ${data.price}</span>
                        <span>Disponibles: {data.stock}</span>
                        <span>Descripción: {data.description}</span>
                        {!showButton ?
                        <ItemCount 
                            setCantidad={setCantidad}
                            stock={data.stock}
                            cantidad={cantidad}
                            setShowButton={setShowButton}
                        />
                        :
                        <Button 
                            style={{
                                marginTop: 4,
                                backgroundColor: 'blue',
                                color: 'whitesmoke',
                                width: '240px',
                                height: '40px',
                                fontSize: '18px',
                            }}  
                            variant='contained'
                            onClick={() => {
                                addProductToCart(data)
                                navigate(`/Cart`)
                            }}
                        >
                            Finalizar compra
                        </Button>}
                    </div>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}

export default ItemDetail