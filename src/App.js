import { useState } from "react"

export default function App() {

let [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }
    function diminuir () {
        setNumero(numero - 1)
    }

    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={diminuir}>Menos</button>
        <button onClick={aumentar}>Mais</button>
    </section>
}