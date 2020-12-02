import {BookContext} from "../contexts/BookContext";
import {useContext,useState} from "react"

export const BookForm = () => {
    // const {addBook} = useContext(BookContext)
    // with reducer
    const { dispatch } = useContext(BookContext)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // addBook(title,author)
        dispatch({type: 'ADD_BOOK',book: {
            title: title, author:author
        }});
        setTitle('')
        setAuthor('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title}
                onChange={(e) => setTitle(e.target.value)} required
            />
            <input type="text" placeholder="book title" value={author}
                   onChange={(e) => setAuthor(e.target.value)} required
            />
            <input type="submit" value="add-book" className="btn btn-sm"/>

        </form>
    )
}
