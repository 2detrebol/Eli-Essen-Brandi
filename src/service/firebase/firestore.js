import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from './index'

export const getProducts = (category) => {
    const collectionRef = !category
        ? collection(db, "items")
        : query(collection(db, "items"), where("category", "==", category))

    return getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(item => {
            const data = item.data()
            return { id: item.id, ...data }
        })
        return productsAdapted
    })
        .catch(error => {
            return error
        })
}
