
import React, { useContext } from 'react';
import ThemeContext from '../MyTheme';
import Component3 from './Component3';
export const Component2 = () => {
    const myVals = useContext(ThemeContext);



    return (
        <>

            <div>{myVals.theme} rendered in component 2</div>
            <button onClick={myVals.toggleTheme}>Toggle Theme</button>
            <Component3 />

        </>
    )
}

export default Component2