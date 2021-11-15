import React from 'react';
import imgLogo from '../img/pokedex-logo.png';

const Header = () => {
    return ( 
        <div className="bg-purple-900 w-auto h-16 flex flex-row justify-between items-center">
            <div></div>
            <div>
                <img className="w-40" src={imgLogo} alt="" />
            </div>
            <div></div>
        </div>
     );
}
 
export default Header;