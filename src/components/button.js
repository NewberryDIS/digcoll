import React, { useState } from 'react'

const Button = props => {
    const buttonCss = {
        normal:{
            padding: '15px 40px',
            paddingRight: '40px',
            position: 'relative',
            left: 0,
            fontSize: '20px',
            color: props.colors[4][1],
            background: props.colors[props.color][1],
            border: 0,
            transition: 'all 0.2s',
        },
        hover: {
            left: props.dir === 'left' ? '-20vmin' :'20vmin' ,
            color: props.colors[props.color][1],
            background: props.colors[4][1],
        }
    }
    const [hover, setHover] = useState(false);
    return (
        <div style={{ flexBasis: '50px' }}
            onMouseEnter={()=> setHover(true) }
            onMouseLeave={()=> setHover(false) } 
            >
        <button 
            style={{
                ...buttonCss.normal,
                ...(hover ? buttonCss.hover : null)
            }} >{props.text} </button>
            </div>
    )
}

export default Button