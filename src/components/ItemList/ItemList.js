import Items from '../Items/Items'
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="containerList">
            {products.map(prod => <Items key={prod.id} product={prod} />)}
        </div>
    )
}

export default ItemList
