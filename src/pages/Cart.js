import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField'
import { addDoc, collection } from 'firebase/firestore'
import db from "../api/firebaseConfig"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const { cartListItems, totalPrice, removeProductFromCart, getTotal, cleanCartProducts } = useContext(CartContext)

    const handleDelete = (product) => {
        removeProductFromCart(product)
    }

    const [showModal, setShowModal] = useState(false)

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            }
        }),
        total: totalPrice
    })

    const [success, setSuccess] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({ ...order, buyer: formValue })
        saveData({ ...order, buyer: formValue })
    }

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const finishOrder = () => {
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }

    return (
        <Container className='container-general'>
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <div className='cart-table__content-img'>
                        <h3>Imagen</h3>
                    </div>
                    <div className='cart-table__content-title'>
                        <h3>Producto</h3>
                    </div>
                    <div className='cart-table__content-price'>
                        <h3>Precio unidad</h3>
                    </div>
                    <div className='cart-table__content-quantity'>
                        <h3>Cantidad</h3>
                    </div>
                    <div className='cart-table__content-price'>
                        <h3>Subtotal</h3>
                    </div>
                    <div className='cart-table__content-price'>
                        <h3>Borrar</h3>
                    </div>
                </div>
                {cartListItems.map((item) => {
                    const { id, title, image, price, quantity } = item
                    return (
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`/${image}`}
                                    style={{
                                        width: 80,
                                    }}
                                />
                            </div>
                            <div className='cart-table__content-title'>
                                <span>{item.title}</span>
                            </div>
                            <div className='cart-table__content-price'>
                                <span>$ {item.price}</span>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <span>{item.quantity}</span>
                            </div>
                            <div className='cart-table__content-price'>
                                <span>${item.amount || item.price}</span>
                            </div>

                            <div className='cart-table__content-price'>
                                <button onClick={() => handleDelete(item)}>
                                    <Delete />
                                </button>
                            </div>
                        </div>
                    )
                })}
                <div className='cart-footer'>
                    <div>
                        <Button
                            style={{
                                textDecoration: 'none',
                                marginTop: 4,
                                backgroundColor: 'blue',
                                color: 'whitesmoke',
                                borderRadius: '24px',
                                width: '240px',
                                height: '40px',
                                fontSize: '14px',
                                justifyContent: 'center',
                            }}
                            variant='contained'
                            onClick={() => {
                                navigate(`/`)
                            }}
                        >
                            Continuar comprando
                        </Button>
                    </div>
                    <div className='cart-checkout__total'>
                        <h3>Total ${getTotal()}</h3>
                    </div>
                    <div>
                        <Button
                            style={{
                                marginTop: 4,
                                backgroundColor: 'green',
                                color: 'whitesmoke',
                                borderRadius: '24px',
                                width: '200px',
                                height: '40px',
                                fontSize: '14px',
                                justifyContent: 'center',
                            }}
                            variant='contained'
                            onClick={() => setShowModal(true)}
                        >
                            Finalizar compra
                        </Button>
                    </div>
                </div>
            </div>
            <Modal title={success ? '¡Muchas gracias por su compra!' : 'Datos comprador'} open={showModal} handleClose={() => setShowModal(false)}>
                {success ? (
                    <div>
                        Su código de transacción es: {success} 
                        <div>
                            <Button
                                onClick={finishOrder}
                                style={{
                                    marginTop: 16,
                                    backgroundColor: 'black',
                                    color: 'whitesmoke',
                                    borderRadius: '24px',
                                    height: '40px',
                                    marginLeft: '140px',
                                }}
                            >
                                Aceptar
                            </Button>
                        </div>
                    </div>
                ) : (
                    <form className="form-contact" onSubmit={handleSubmit}>
                        <TextField
                            id="outlined-basic"
                            name="name"
                            label="Nombre completo"
                            variant="outlined"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            name="phone"
                            label="Teléfono"
                            variant="outlined"
                            value={formValue.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            name="email"
                            label="Email"
                            value={formValue.email}
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Button
                            style={{
                                marginLeft: 10,
                                backgroundColor: 'black',
                                color: 'whitesmoke',
                                borderRadius: '24px',
                                height: '40px',
                                fontsize: '30px',
                            }}
                            type="submit"
                        >
                            Enviar
                        </Button>
                    </form>
                )}
            </Modal>
        </Container>
    )
}

export default Cart