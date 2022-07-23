import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Items.css"


function Items() {
    return (
        <div className="containerCards">
            <Card className="containerItem">
                <div className="containerImg">
                    <img variant="top" src="https://i.imgur.com/FNOWYeh.png" alt="Nike Jordan Proto-Lyte" />
                </div>
                <Card.Body className="cuerpoCard">
                    <Card.Title className="tituloCard">Card Title</Card.Title>
                    <Card.Text className="textoCard">
                        Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen. Son una excelente opción ya que se adaptan a una familia de entre 4 y 5 integrantes resolviendo absolutamente todas las posibilidades de preparaciones y cocciones tanto dulces como saladas: desde tortas a panes, carnes, cazuelas, guisados y sopas, etc.
                    </Card.Text>
                    <Button className="botonCard" variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items;
