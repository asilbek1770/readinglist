import { useContext } from "react"
import {BookContext} from "../contexts/BookContext";
import {BookList} from "./BookList";

export const Navbar = () => {
    const { books } = useContext(BookContext)
    return(
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently tou have {books.length} books to get through... </p>
        </div>
    )
}
