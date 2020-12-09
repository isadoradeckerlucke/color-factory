// import React, { useState, useEffect } from "react";
// import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

// import Colors from "./Colors";
// import NewColorForm from "./NewColorForm";
// import Color from "./Color";


// function Routes() {

//   const initialColors = JSON.parse(localStorage.getItem("colors")) || {
//     red: "#FF0000",
//     green: "#00FF00",
//     blue: "#0000FF"
//   };
//   const [colors, updateColors] = useState(initialColors);

//   useEffect(
//     () => localStorage.setItem("colors", JSON.stringify(colors)),
//     [colors]
//   );

//   function handleAdd(newColorObj) {
//     updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
//   }

//   function renderCurrentColor(props) {
//     const { color } = props.match.params;
//     const hex = colors[color];
//     return <Color {...props} hex={hex} color={color} />;
//   };

//   return (
//     <BrowserRouter>
//       <Switch>

//         <Route exact path="/colors">
//           <Colors colors={colors} />
//         </Route>

//         <Route exact path="/colors/new">
//           <NewColorForm addColor={handleAdd} />
//         </Route>

//         <Route path="/colors/:color" render={renderCurrentColor} />
        
//         <Redirect to="/colors" />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default Routes;





import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes() {
    // if there are already colors added use those, otherwise use red green and blue. 
    const initialColors = JSON.parse(localStorage.getItem('colors')) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    }

    const [colors, updateColors] = useState(initialColors);

    // when colors changes, re render and add new colors to local storage
    useEffect(
        () => localStorage.setItem('colors', JSON.stringify(colors)), [colors]
    )

    // add new colors -- pass this into new color form as an object. updates the state of colors with any new colors. 
    function handleAdd(newColorObj) {
        updateColors(prevColors => ({ ...prevColors, ...newColorObj}))
    }

    // function to render the current color using the Color component. gets passed into color component as an object to be used. 
    function renderCurrentColor(props) {
        const {color} = props.match.params;
        const hex = colors[color]
        return <Color {...props} hex = {hex} color = {color} />
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <Colors colors={colors} />
                </Route>

                <Route exact path="/colors/new">
                    <NewColorForm addColor={handleAdd} />
                </Route>

                <Route path="/colors/:color" render={renderCurrentColor} />

                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
