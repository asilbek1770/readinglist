import React, {Component,createContext} from 'react';
import img from "../../../gelik.jpg"

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLight: false,
        light: "green",
        dark: "black",
        img: img,

        selected: false
    }

    handleClick = () => {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        return (
            <div>
                <button className="btn btn-light" onClick={this.handleClick}>click</button>
                {this.state.selected ?
                    <ThemeContext.Provider value={{...this.state}}>
                        {this.props.children}
                    </ThemeContext.Provider>
                    : null
                }
              
            </div>
        );
    }
}

export default ThemeContextProvider;