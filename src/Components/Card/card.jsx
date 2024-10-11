import { Btn } from '../Buttons/buttons'
import { useState, useRef } from 'react';
import './card.css'
export function Cards() {
    const [hexcode, setHexcode] = useState('#FFFFFF')
    const [rgb, setRgb] = useState('rgb(255,255,255)')
    const [status, setStatus] = useState('')
    function hexToRgb(random) {
        let bigint = parseInt(random.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return 'rgb(' + `${r}, ${g}, ${b}` + ')'
    }
    function generateRandom() {
        console.log("hi");
        let random = "#";
        random += (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
        setHexcode(random)
        setRgb(hexToRgb(random))
    }
    function copy(type) {
        console.log(rgb);

        type === "hex" ? navigator.clipboard.writeText(hexcode) : navigator.clipboard.writeText(rgb)
        setStatus('Color copied to Clipboard')
        setTimeout(() => {
            setStatus('')
        }, 1000)

    }
    function darkmode() {
        document.body.classList.toggle('dark-mode')
    }
    return (
        <div className="inner-container">
            <h1 style={{ color: 'lightblue' }}>Random Color Genrator</h1>
            <div className="color-code" style={{ backgroundColor: hexcode }}>
                <h2 className="hexcode" >{hexcode}</h2>
                <h2 className="rgb" > {rgb}</h2>
            </div>
            <div className="btns">
                <Btn onClick={() => generateRandom()} name="GenerateColor" />
                <Btn name="CopyHexColor" onClick={() => copy('hex')} />
                <br />
                <Btn name="CopyRgb" onClick={() => copy('rgb')} />
                <Btn name="Darkmode" onClick={() => darkmode()} />

            </div>
            <p className="status">{status}</p>
        </div>

    )
}