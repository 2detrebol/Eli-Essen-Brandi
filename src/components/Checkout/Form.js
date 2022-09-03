import { useContext } from 'react';
import CartContext from '../../context/CartContex';

const Form = ({ createOrder }) => {

    const { buyer, setBuyer } = useContext(CartContext)
    const { firstName, lastName, email, address, phone } = buyer

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    name='firstName'
                    placeholder="Nombre"
                    value={firstName}
                    onChange={handleChange}
                />
                <input
                    required
                    type="text"
                    name='lastName'
                    onChange={handleChange}
                    value={lastName}
                    placeholder="Apellido"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    name='address'
                    value={address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    required
                />
                <button onClick={() => createOrder()}>Generar Orden</button>
            </form>
        </div>
    )
}

export default Form
