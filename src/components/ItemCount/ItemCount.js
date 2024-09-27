import { Button } from '@mui/material'
import './ItemCount.css'
import AddIcon from '@mui/icons-material/Add'

const ItemCount = ({ cantidad, setCantidad, setShowButton, stock }) => {
    //const { image, title, price, stock } = props

    const addCount = () => {
        if (cantidad + 1 > stock) {
            alert("No hay stock suficiente")
            return
        }
        setCantidad(cantidad + 1)
    }

    const removeCount = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className='custom-count'>
                <Button onClick={removeCount}>-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            {setShowButton &&
                <Button 
                    style={{
                        marginTop: 4,
                        backgroundColor: 'green',
                        color: 'whitesmoke',
                        borderRadius: '24px',
                        width: '300px',
                        height: '40px',
                        fontSize: '18px',
                    }}  
                    variant='contained' 
                    onClick={() => setShowButton(true)}><AddIcon />Agregar al carrito
                </Button>
            }
        </>
    )
}

export default ItemCount