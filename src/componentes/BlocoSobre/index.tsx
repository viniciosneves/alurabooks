import './BlocoSobre.css'

interface BlocoSobreProps {
    titulo?: string
    corpo?: string
}

const BlocoSobre = ({ titulo, corpo } : BlocoSobreProps) => {
    return (<div className='bloco-sobre'>
        <h2>{titulo}</h2>
        <p>{corpo}</p>
    </div>)
}

export default BlocoSobre