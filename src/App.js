import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import BookContextProvider, {BookContext} from "./ReadingListContextWithHooks/contexts/BookContext";
import {Navbar} from "./ReadingListContextWithHooks/component/Navbar";
import {BookList} from "./ReadingListContextWithHooks/component/BookList";
import {BookForm} from "./ReadingListContextWithHooks/component/BookForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BookContextProvider>
                    <Navbar />
                    <BookList />
                    <BookForm />
                </BookContextProvider>
            </div>
        );
    }
}

export default App;