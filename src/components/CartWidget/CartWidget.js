import { useContext, useState } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Menu from '@mui/material/Menu'
import DeleteIcon from '@mui/icons-material/Delete'
import CartContext from '../../context/CartContext'
import { Link } from "react-router-dom"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'

const CartWidget = () => {
    const { cartListItems, removeProductFromCart, removeAllProductsFromCart } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (product) => {
        console.log(product)
        removeProductFromCart(product)
    }

    const handleDeleteAll = () => {
        removeAllProductsFromCart()
    }

    return (
        <div className='cart-container-icon'>
            <ShoppingCartIcon
                color={'black'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 ? (
                        <>
                            <span><b> Carrito de compras vacío </b></span>
                        </>
                    ) : (
                        <>
                            <button onClick={() => removeAllProductsFromCart()}>
                                    <DeleteIcon /> Limpiar todo
                            </button>
                            <button variant='contained'> 
                                    <Link to="/Cart" style={{ textDecoration: 'none', color:'black' }}>
                                        <ShoppingCartCheckoutIcon /> Ver carrito
                                    </Link> 
                            </button>
                        </>
                    )}
                    {cartListItems.map((item) => {
                        return (
                            <div className='item-cart-prod' key={item.id}>
                                <div className='cart-prod__image'>
                                    <img
                                        src={`/${item.image}`}
                                        alt="prod carrito"
                                        resizeMode="stretch"
                                        style={{
                                            width: 120,
                                        }}
                                    />
                                </div>
                                <div className='cart-prod__info'>
                                    <p>{item.quantity || 1}x {item.title}</p>
                                    <span>$ {item.amount || item.price}</span>
                                </div>
                                <div className='cart-prod__action'>
                                    <button onClick={() => handleDelete(item)}>
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget