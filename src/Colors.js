import React from 'react';
import {Link} from 'react-router-demo';

function Colors({colors}) {

    console.log(colors, 'i am colors')
    return (
        <div>
            <h1>welcome to the color factory</h1>
            <h1><Link to = '/colors/new'>add a color</Link></h1>

            <p>please select a color from the list below</p>
            <ul>
                {colors.map(color => (
                    <div key = {color.name} >
                        
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Colors;