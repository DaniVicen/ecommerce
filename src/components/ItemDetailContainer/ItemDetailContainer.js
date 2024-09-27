import ItemDetail from "../ItemDetail/ItemDetail"
import { useLocation } from "react-router-dom"

const ItemDetailContainer = () => {
    const {state} = useLocation();

    return(
        <ItemDetail data={state} />
    )
}

export default ItemDetailContainer