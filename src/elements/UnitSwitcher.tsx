import React from "react";
import {ReactComponent as Celsius} from '../img/svg/celsius.svg';
import {ReactComponent as Fahrenheit} from '../img/svg/fahrenheit.svg';
const UnitSwitcher = () => {
    return (
        <div className="unit-switcher">
            <Celsius/> | <Fahrenheit/>
        </div>
    )    
}

export default UnitSwitcher;