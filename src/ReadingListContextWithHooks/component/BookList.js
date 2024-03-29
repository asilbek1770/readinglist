import {BookContext} from "../contexts/BookContext";
import {useContext} from "react"
import {BookDetails} from "./BookDetails";

export const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => <BookDetails book={book} key={book.id}/>)}
            </ul>
        </div>
    ) : (
        <div className="empty">
            No books to read. Hello free time :)
        </div>
    )
}