import { ref as VueRef } from 'vue'

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAOwAgr8_Hf5YKWLO68MwdJM3LuLyyahU",
  authDomain: "int-class-portfolio.firebaseapp.com",
  projectId: "int-class-portfolio",
  storageBucket: "int-class-portfolio.appspot.com",
  messagingSenderId: "597339417332",
  appId: "1:597339417332:web:e835f610672e4e7cd90ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getTodos = () => {

  const todo = VueRef({
    title: '',
    description: '',
    invalid: false,
    errMsg: ''
  })

  const todoList = VueRef([])


  const todosCollection = collection(db, 'todos')

  const fetchTodos = async () => {
    onSnapshot(todosCollection, (snapshot) => {
      todoList.value = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }))
    })
  }

  const createTodo = async () => {
    try {
      const docRef = await addDoc(todosCollection, {
        title: todo.value.title,
        description: todo.value.description
      })
      console.log("Document written with ID: ", docRef.id)
      todo.value.title = ''
      todo.value.description = ''
    }
    catch (error) {
      console.log(error)
    }
  }

  const deleteTodo = async (todo) => {
    try {
      await deleteDoc(doc(todosCollection, todo.id))
      console.log("Document deleted")
    }
    catch (error) {
      console.log(error)
    }
  }

  return {
    todo,
    todoList,
    createTodo,
    fetchTodos,
    deleteTodo
  }
}

export default getTodos