import React, { useState, useContext } from 'react'
import CartContext from '../../contexto/CartContex';
import { db } from '../../service/firebase';
import { addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, clearCart, getTotal } = useContext(CartContext);

    const MensajeOrden = withReactContent(Swal)

    const navigate = useNavigate();

    const total = getTotal();

    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        telefono: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const createOrder = async () => {
        setIsLoading(true);
        try {
            const objOrder = {
                buyer: {
                    firstName: data.nombre,
                    lastName: data.apellido,
                    phone: data.telefono,
                    email: data.email,
                    address: data.direccion,
                },
                items: cart,
                total,
                date: new Date(),
            }

            /*const ids = cart.map(item => item.IDColor);*/
            const ids = cart.map(item => item.id)

            const itemsRef = collection(db, 'items');

            const batch = writeBatch(db);

            /*const itemsAddFromFirestore = await getDocs(query(itemsRef, where("IDColor", "in", ids)));*/
            const itemsAddFromFirestore = await getDocs(query(itemsRef, where(documentId(), "in", ids)));

            const { docs } = itemsAddFromFirestore;

            const outOfStock = [];

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const itemAddCart = cart.filter(item => item.id === doc.id);

                itemAddCart.forEach(cartItem => {
                    const { quantity, color } = cartItem;

                    if (stockDb[color] >= quantity) {
                        stockDb[color] = stockDb[color] - quantity
                        batch.update(doc.ref, { stock: stockDb });
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc });
                    }
                })
            });


            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const order = await addDoc(orderRef, objOrder);
                console.log(`El id de su orden es: ${order.id}`)
                MensajeOrden.fire({
                    html:
                        <div>
                            <h1>¡Gracias {data.nombre}!</h1>
                            <p>La orden de compra fue creada correctamente</p>
                            <p>El código de su orden es: {order.id} </p>
                            <p>El importe total que deberá abonar es $ {total}</p>
                        </div>
                    ,
                    icon: 'success',
                    confirmButtonText: "Aceptar",
                }).then((res) => {
                    if (res.isConfirmed) {
                    }
                    return MensajeOrden.fire(
                        {
                            html:
                                <p>En los próximos 3 segundos será rederigido a nuestra página principal </p>,
                            showConfirmButton: false,
                            timer: 3000
                        },
                        setTimeout(() => {
                            navigate('/')
                        }, 3000))
                })
                setOrderCreated(true);
                clearCart();

            } else {
                console.log(`No hay stock suficiente para los siguientes productos: ${outOfStock.map(item => item.name + ", en color " + item.color)}`);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    //get order

    if (isLoading) {
        return <h1>Generando orden...</h1>
    }

    if (orderCreated) {
        return MensajeOrden
    }

    return (
        <>
            <h1>Complete los datos del formulario</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={data.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={data.apellido}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Correo"
                    value={data.email}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="telefono"
                    placeholder="Teléfono"
                    value={data.telefono}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    value={data.direccion}
                    onChange={handleChange}
                />

                <button type="submit" onClick={createOrder}> Generar Orden </button>
            </form>

        </>
    )
}

export default Checkout;