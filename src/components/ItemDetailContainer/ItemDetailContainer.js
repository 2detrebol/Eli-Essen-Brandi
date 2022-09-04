import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getItem } from "../../service/firebase/firestore";
import { useAsync } from '../../hooks/useAsync'


const ItemDetailContainer = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useAsync(() => getItem(id))

    if (isLoading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoLoading" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    if (error) {
        return <h1>Hubo un error, contacte al Administrador</h1>
    }

    return (
        <>
            <ItemDetail {...data} />
        </>
    )
}
export default ItemDetailContainer;
