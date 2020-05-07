import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Jumbo from './components/jumbo';
import Content from './components/content';

export const colors = [
  [
      ['sky0', '#2C324A'],
      ['sky1', '#53717B'],
      ['sky2', '#688681'],
      ['sky3', '#819D89'],
      ['sky4', '#E1C8A6']
  ],
  [
      ['building0','#2D2032'],
      ['building1','#142454'],
      ['building2','#765D8F'],
      ['building3','#B14060'],
      ['building4','#CCABAC']
  ],
  [
      ['sunset0', '#44413D'],
      ['sunset1', '#554A4A'],
      ['sunset2', '#946763'],
      ['sunset3', '#BB6662'],
      ['sunset4', '#EDB087']
  ],
  [
      ['jen0', '#110B12'],
      ['jen1', '#4C203A'],
      ['jen2', '#5C6162'],
      ['jen3', '#B75E7D'],
      ['jen4', '#E4CCE1']
  ]
]

const fonts = [
  "'Major Mono Display', monospace",
  "'Vast Shadow', cursive",
  "'Anonymous Pro', monospace",
]

const FontSelector = ({setFont}) => {
  const changer = v => {
    console.log(fonts[v])
    setFont(v)
  }
  return (
    <select style={{top: '10px', ...selectCss}} onChange={e => changer(e.target.value)}>
        <option value="0">Major Mono Display</option>
        <option value="1">Vast Shadow</option>
        <option value="2">Anonymous Pro</option>
    </select>
  )
}

const selectCss = {
  position: 'fixed',
  right: '160px',
  zIndex: 100,
  background: 'transparent',
  border: '1px solid black',
  height: '30px',
}
const ColorSelector = ({setPalette}) => {
  return (
      <select style={{top: '50px', ...selectCss}} onChange={e => setPalette(e.target.value)}>
          <option value="0">sky</option>
          <option value="1">building</option>
          <option value="2">sunset</option>
          <option value="3">jen</option>
      </select>
  )
}

function App() {
  const [ font, setFont ] = useState(0)
  const [ palette, setPalette ] = useState(0)
  
  return (
    <div className="App">
      <ColorSelector setPalette={setPalette} />
      <FontSelector setFont={setFont} />
      <Sidebar colors={colors[palette]} link={'learn'}  />
      <div style={bodyCss}>
        <Jumbo colors={colors[palette]} font={fonts[font]} />
        <Content colors={colors[palette]} font={fonts[font]} />
      </div>
      <Sidebar colors={colors[palette]} link={'contribute'} />
    </div>
  );
}
const flexCss = {
  flex: 1,
  overflow: 'hidden',
  display: 'flex',
  width: '80%',
  margin: 'auto'
}

const bodyCss = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default App;

