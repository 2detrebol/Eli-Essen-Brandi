import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <h1 className="animate__animated animate__bounceIn animate__delay-1s">{greeting}</h1>
    )
}

export default ItemListContainer