
import React, { useContext } from 'react';
import ThemeContext from '../MyTheme';

export const Component4 = () => {

    const myVals = useContext(ThemeContext);


    return (
        <>

            <div>{myVals.theme} rendered in component 4</div>
            <div>component 4</div>

        </>
    )
}

export default Component4