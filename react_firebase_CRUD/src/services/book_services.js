import { db } from '../firebase_config'
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore'

let bookCollectionRef = collection(db, 'Books')
export default class BookService {

    static addBooks = (newBook) => {
        return addDoc(bookCollectionRef, newBook)
    }

    static getAllBooks = () => {
        return getDocs(bookCollectionRef)
    }

    static getBook = (id) => {
        const bookDoc = doc(db, "Books", id)
        return getDoc(bookDoc)
    }

    static updateBook = (id, updatedBook) => {
        const bookDoc = doc(db, "Books", id);
        return updateDoc(bookDoc, updatedBook)
    }

    static deleteBook = (id) => {
        const bookDoc = doc(db, "Books", id);
        return deleteDoc(bookDoc)
    }

    // static searchBook = () => {
    //     const bookDoc = doc(db, "Books");
    //     return query(bookCollectionRef, bookDoc)
    // }


}

