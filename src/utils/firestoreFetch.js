import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

export const firestoreFetch = async (id) => {
        let q;
        if (id === undefined) {
            q = collection(db, "products");

        } else {
            q = query(collection(db, 'products'), where('categoryId', '==', id))
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return dataFromFirestore
    }