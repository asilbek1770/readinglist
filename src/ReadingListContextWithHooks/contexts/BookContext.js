import React, { createContext, useState,useReducer,useEffect } from "react"
import uuid from 'uuid/dist/v1'
import {render} from "@testing-library/react";
import {BookReducer} from "../Reducers/BookReducer";
export const BookContext = createContext();

const BookContextProvider = (props) => {
    // const[books, setBooks] = useState([
    //     {title: "name of mind",author: "patrick rothfuss", id: 1},
    //     {title: "the final empire",author: "brandon sanderson", id: 2},
    // ])
    //
    // const addBook = (title, author) => {
    //     setBooks([...books, {title: title, author: author, id: uuid()}])
    // }
    //
    // const removeBook = (id) => {
    //     setBooks(books.filter(b => b.id !== id))
    // }

    //
    // return(
    //     <BookContext.Provider value={{ books, addBook, removeBook }}>
    //         {props.children}
    //     </BookContext.Provider>
    // )

    // with reducer
    const [books,dispatch] = useReducer(BookReducer,[], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    })
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books),[books])
    })
    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider