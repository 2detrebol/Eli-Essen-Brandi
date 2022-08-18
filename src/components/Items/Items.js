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
                <Card.Body className="cuerpoCard">
                    <Card.Title className="tituloCard">{product.name}</Card.Title>
                    <Card.Text className="textoCard">
                        {product.description}
                    </Card.Text>
                    <Link className="botonCard botonCard btn btn-primary" to={`/Detalle/${product.id}`}>Ver más</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items;
