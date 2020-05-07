import React from 'react'
import Button from './button'

const Jumbo = props => {
    const jumboCss = {
        flexBasis: '40vh',
        backgroundColor: props.colors[3][1],
        color: props.colors[4][1],
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <div style={jumboCss}>
            <h1 style={{
                fontFamily: props.font
            }} className="mainTitle">
                Digital Newberry
            </h1>
            <h2 className="mainsubtitle" style={{
                fontFamily: props.font === "'Major Mono Display', monospace" ? "'Anonymous Pro', monospace" : "'Major Mono Display', monospace"
            }} >
                Newberry Department of Digital Initiatives and Services
            </h2>
            <Button text={'\u2BC7 learn'} color={2} colors={props.colors} dir={'left'} />
        </div>
    )
}

export default Jumbo