import { useState, useEffect } from "react"
import CardList from '../CardList/CardList'
import { fetchProductsByCategory } from '../../api/products'
import { useParams } from 'react-router-dom'
import { CircularProgress } from "@mui/material"
import { collection, getDocs } from "firebase/firestore"
import db from '../../api/firebaseConfig'

const ProductsListContainer = () => {

    const [products, setProducts] = useState ([])
    const [loadingProducts, setLoadingProducts] = useState(false)
    const { categoryId } = useParams()

    const getProducts = async (callbacks) => {
        const productSnapshot = await getDocs(collection(db, "productos"));
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product    
        })
        const filteredList = productList.filter(product => parseInt(product.categoryId) === parseInt(categoryId))
        callbacks.onSuccess(filteredList)
    }

    useEffect ( () => {
        setLoadingProducts(true)
        getProducts({
            onSuccess: (data) => {
                setLoadingProducts(false)
                setProducts(data)
            }
        })
        /*fetchProductsByCategory(parseInt(categoryId))
        .then( (response) => {
            setLoadingProducts(false)
            setProducts(response)
        })
        .catch( (err) => {
            setLoadingProducts(false)
        })*/
    
    }, [categoryId])

    if (loadingProducts) {
        return (
            <h1><CircularProgress/></h1>
        )
    }

    return (
        <div>
            <CardList products={products} title={''} />
        </div>
    )
}

export default ProductsListContainer