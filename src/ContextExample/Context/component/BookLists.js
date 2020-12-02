import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class BookLists extends Component {
    static contextType = ThemeContext

    render() {
        const { isLight,img} = this.context
        return (
            <>
                <h4 className={ isLight ? "bg-light" : ""}>BookList</h4>
                <ul>
                    <li>the way of kings</li>
                    <li>the name of the wind</li>
                    <li>the final empire</li>
                </ul>
                    <img src={img} alt="" width="200" height="200"/>
            </>

        );
    }
}

export default BookLists;