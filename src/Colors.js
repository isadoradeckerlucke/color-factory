import React from 'react';
import {Link} from 'react-router-dom';

function Colors({colors}) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key = {colorName}>
            <Link to={`/colors/${colorName}`}>
                {colorName}
            </Link>
        </li>
    ))

    return (
        <div>
            <h1>welcome to the color factory</h1>
            <h1><Link to="/colors/new">add a color</Link></h1>


            <p>please select a color from the list below</p>
            <ul>
                {colorLinks}
            </ul>
        </div>
    )
}

export default Colors;