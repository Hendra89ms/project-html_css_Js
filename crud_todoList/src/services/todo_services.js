import { db } from '../firebase_config'
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, documentId } from 'firebase/firestore'

let todoCollectionRef = collection(db, 'todo')
export default class TodoServices {

    static addTodos = (newTodo) => {
        return addDoc(todoCollectionRef, newTodo)
    }

    static getAllTodos = () => {
        return getDocs(todoCollectionRef)
    }

    static getTodo = (id) => {
        const todoDoc = doc(db, "todo", id)
        return getDoc(todoDoc)
    }

    static updateTodo = (id, updateTodo) => {
        const todoDoc = doc(db, "Books", id);
        return updateDoc(todoDoc, updateTodo)
    }

    // static deleteTodo = (id) => {
    //     const todoDoc = doc(db, "todo", id);
    //     return deleteDoc(todoDoc)
    // }


}

