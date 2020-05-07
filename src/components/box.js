import React, { useState } from 'react'


const boxCss = {
  width: '350px',
  height: '350px',
  margin: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 1s',
  position: 'relative',
}

const textBoxCss = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.01,
    maxHeight: '300px',
    overflow: 'auto',
    transition: 'all 0.1s',
    width: '80%',
    margin: 'auto',
    padding: '20px',
    hover: {
        opacity: 0.99
    }
}

const Box = (props) => {
    const [hover, setHover] = useState(false);
    const boxProps = props.boxProps
    console.log(props.colors)
    require(`../images/digcolls/${boxProps.image}`)
    return (
        <a
            href={boxProps.url} 
            className="box" 
            style={{
                color: props.colors[4][1],
                background: `url('/images/digcolls/${boxProps.image}')`, 
                border: `40px solid ${props.colors[3][1]}`,
                ...boxCss,
            }}
            onMouseEnter={()=>{
                setHover(true);
            }}
            onMouseLeave={()=>{
                setHover(false);
            }} 
        >
            <div style={{
                background: props.colors[1][1],
                ...textBoxCss, 
                ...(hover ? textBoxCss.hover : null)}}>
                    <h3>

                        {boxProps.title}
                    </h3>
                    <p className="contentTextDesc">
                        {boxProps.desc}
                    </p>
            </div>
        </a>
    )
}

export default Box