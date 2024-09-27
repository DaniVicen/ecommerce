import './NavBar.css'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState, useContext } from 'react'
import { categorias } from '../../api/products'
import ThemeSwitch from './ThemeSwitch'
import { ThemeContext } from '../../context/ThemeContext'

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <AppBar position="static" className={`header-primary ${darkTheme ? 'dark-mode' : ''}`}>
            <Toolbar>
                <div className='container-logo'>
                    <img src="/logo tacuara.png"/>
                </div>
                <ul className='navbar'>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'white'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/" style={{ textDecoration: 'none', color:'#FFF' }}>Inicio</Link>
                        </Button>
                    </li>
                    <li>
                    <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            disableRipple
                            variant='text' 
                            className='navbar__btn'
                            style={{ backgroundColor: 'white'}}
                        >
                            Comidas
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            style={{ width: '260px'}}
                            open={open}
                            className='navbar__btn'
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {categorias
                            .filter(cat => !cat.mostrarSeparado)
                            .map( (cat) => {
                                return <MenuItem onClick={handleClose}><Link to={`/products/${cat.id}`}  style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '100'}}>{cat.name}</Link></MenuItem>
                            })}
                        </Menu>
                    </li>
                    <li>
                        <Button 
                            id="basic-button"
                            disableRipple 
                            style={{ backgroundColor: 'white'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/products/1" style={{ textDecoration: 'none', color:'#FFF' }}> Nuestras Cervezas</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'white'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Events" style={{ textDecoration: 'none', color:'#FFF' }}>Eventos</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'white'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Contact" style={{ textDecoration: 'none', color:'#FFF' }}>Sucursales</Link>
                        </Button>
                    </li>
                </ul>
                
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar