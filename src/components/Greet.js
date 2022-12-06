import React from 'react'

// function Greet()
// {
//     return <h1>Hello JX</h1>
// }

//const Greet = ({name, hereName}) =>
export const Greet = (props) => {
    const {name, heroName, children} = props
    return (
        <div>
            {/* <h1>Greet JS {props.name} a.k.a {props.heroName}</h1>
            {props.children} */}
             <h1>Greet JS {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
}
// export default Greet 