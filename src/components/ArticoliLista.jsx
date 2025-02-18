

const articoli = ["html", "css", "java", "react"];


export default function ArticoliLista() {

    return (
        <ul>
            {articoli.map((articolo, i) => (
                <li key={i}>{articolo}</li>
            ))}
        </ul>
    )
}
