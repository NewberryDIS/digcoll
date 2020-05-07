import React from 'react'
import Button from './button'
import data from '../data/digcolls'
import Box from './box'

const Content = props => {
    const contentCss = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: props.colors[2][1],
        color: props.colors[4][1],
        // maxHeight: '80vh',
        // overflow: 'auto',
    }
    const colorBoxes = props.colors.map((c, index) => {
        const textColor = index > 1 ? props.colors[0][1] : props.colors[4][1]
        return (
              <div key={c[0]} className="color" style={{
                height: '200px',
                flex: 1,

                backgroundColor: c[1],
              }}>
              <p style={{
                lineHeight: '200px',
                color: textColor
              }}> 
                {c[0]}
              </p>
            </div>
        )
    })
    const boxes = data.map(i => <Box  color={3} colors={props.colors}  boxProps={i} />)
    return (
        <div style={contentCss}>
            <Button text={'contribute \u2BC8'} color={3} colors={props.colors} dir={'right'} />
            <h2 className="mainsubtitle" style={{
                flex: 1,
                fontFamily: props.font === "'Major Mono Display', monospace" ? "'Anonymous Pro', monospace" : "'Major Mono Display', monospace"
            }} >
                learn summin in the digital thing
            </h2>
            <div style={{
                flex:1,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 'auto',
                justifyContent: 'space-evenly',
            }} >
                {boxes}
            </div>
            <div style={{
                flex:1,
                display: 'flex',
                flexDirection: 'row',
            }} >
            {colorBoxes}
            </div>
        </div>
    )
}
export default Content