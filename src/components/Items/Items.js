import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Items.css"

import { Link } from 'react-router-dom';

function Items({ product }) {
    let colores = () => {
        switch (product.color) {
            case "terra":
                return "#786B60";
            case "aqua":
                return "#519692";
            default: return "#5E1519";
        }
    }

    return (

        <div className="containerCards animate__animated animate__fadeIn">
            <Card className="containerItem" style={{ backgroundColor: colores() }}>
                <div className="containerImg">
                    <p className="categoryProduct" style={{ color: colores() }}>{product.category}</p>
                    <img variant="top" src={product.img} alt={product.name} />
                    <p className="sizeProduct" style={{ color: colores() }}>{product.size}</p>
                </div>
                <Card.Body className="cuerpoCard">
                    <Card.Title className="tituloCard">{product.name}</Card.Title>
                    <Card.Text className="textoCard">
                        {product.description}
                    </Card.Text>
                    <Button className="botonCard" onClick={() => {
                        <Link to="<ItemDetail />" />
                    }}>Ver más</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items;
