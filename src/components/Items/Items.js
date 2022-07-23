import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Items.css"

function Items({ product }) {
    return (
        <div className="containerCards">
            <Card className="containerItem">
                <div className="containerImg">
                    <p className="categoryProduct">{product.category}</p>
                    <img variant="top" src={product.img} alt={product.name} />
                    <p className="sizeProduct">{product.size}</p>
                </div>
                <Card.Body className="cuerpoCard">
                    <Card.Title className="tituloCard">{product.name}</Card.Title>
                    <Card.Text className="textoCard">
                        {product.description}
                    </Card.Text>
                    <Button className="botonCard" variant="primary">más info</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items;
