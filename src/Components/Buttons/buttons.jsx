
import './button.css'


export function Btn({ onClick, name }) {
    return (
        <button onClick={onClick}>{name}</button>
    )

}