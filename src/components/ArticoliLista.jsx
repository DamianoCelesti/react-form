import { useState } from 'react'


const articoliIniziali = ["html", "css", "java", "react"];


export default function ArticoliLista() {

    const [articoli, setArticoli] = useState(articoliIniziali);
    const [nuovoTitolo, setNuovoTitolo] = useState('');

    const addTitolo = event => {
        event.preventDefault();
        const listaAggiornata = [...articoli, nuovoTitolo];
        setArticoli(listaAggiornata);
        setNuovoTitolo("");

    }
    return (
        <>
            <form onSubmit={addTitolo}>
                <input
                    type="text"
                    value={nuovoTitolo}
                    onChange={event => { setNuovoTitolo(event.target.value) }}
                />
                <button>Invia</button>
            </form>
            <ul>
                {articoli.map((articolo, i) => (
                    <li key={i}>{articolo}</li>
                ))}
            </ul>
        </>
    )
}
