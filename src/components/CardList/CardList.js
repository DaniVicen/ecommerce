import CardItem from '../Card/Card'
import { Grid } from '@mui/material'

const CardList = ({ title, products }) => {    
    return(
        <>
        <h2>{title}</h2>
        {console.log("state products: ", products)}
        <Grid container spacing={1}>
            {
                products.map( (producto) => {
                    const {id, title, price, image, stock, description, categoryName} = producto
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem 
                                id={id} 
                                title={title} 
                                price={price} 
                                image={image} 
                                stock={stock} 
                                description={description} 
                                categoryName={categoryName}
                            />  
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList