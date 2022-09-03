import Card from 'react-bootstrap/Card';
import "./Items.css"
import { Link } from 'react-router-dom';


function Items({ product }) {
    const colores = () => {
        return product.color === "terra" ? "#786B60" : product.color === "aqua" ? "#519692" : "#5E1519";
    }

    return (
        <div className="containerCards animate__animated animate__fadeIn">
            <Card className="containerItem animate__animated animate__flipInX" style={{ backgroundColor: colores() }}>
                <div className="containerImg">
                    <p className="categoryProduct" style={{ color: colores() }}>{product.tittle}</p>
                    <img variant="top" src={product.img} alt={product.name} />
                    <p className="sizeProduct" style={{ color: colores() }}>{product.size}</p>
                </div>
                <Card.Body>
                    <Card.Title className="cardTittle">{product.name}</Card.Title>
                    <Card.Text className="cardText">
                        {product.description}
                    </Card.Text>
                    <Link className="cardButton btn btn-primary" to={`/Detail/${product.id}`}>Ver más</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items;
