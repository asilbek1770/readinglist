import {BookContext} from "../contexts/BookContext";
import {useContext} from "react"
export const BookDetails = ({book}) => {
    // const { removeBook } = useContext(BookContext)
    const { dispatch } = useContext(BookContext)

    return(
            <li key={book.id} onClick={() => dispatch({type: 'REMOVE_BOOK',id: book.id})}>
                <div className="title">title: {book.title}</div>
                <div className="author">author: {book.author}</div>
            </li>
    )
}