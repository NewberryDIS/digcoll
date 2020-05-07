import React from 'react'
// import {colors} from '../App'

const Sidebar = props => {
    const letters = props.link.split('').map( l => {
        console.log(l)
    return    <p className="letter">{l}</p>
})
    const sidebarCss = {
        flexBasis: '150px',
        width: '150px',
        height: '100vh',
        overflow: 'hidden',
        fontSize: '24px',
    }
    const menuCss = { 
        backgroundColor: props.colors[0][1],
        color: props.colors[4][1],
        height: '100vh',
        width: '150px',
        lineHeight: '100vh',
        position: 'fixed',
        top: 0,
        fontFamily: "'Major Mono Display', monospace",
    }
    return (
        <div style={sidebarCss} >
            <div style={menuCss}>
                {letters}
            </div>
        </div>
    )
}
export default Sidebar