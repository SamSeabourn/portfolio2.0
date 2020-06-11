import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: false,
        light: {
            titleColor: '#202536',
            highlightColor: '#FB782F',
            textColor: '#000',
            bg: '#fff'
        },
        dark: {
            titleColor: '#202536',
            highlightColor: '#E109AF',
            textColor: '#fff',
            bg: '#202536'
        }
     }

     toggleTheme = () => {
         this.setState({ isLightTheme: !this.state.isLightTheme })
     }

    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
                { this.props.children }      
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;