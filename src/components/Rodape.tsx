import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

const Rodape = () => {
    const participantes = useListaDeParticipantes();
    const navigate = useNavigate()

    const iniciar = () => {
        navigate('/sorteioS')
    }
    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciar}>
                Iniciar a Brincadeira
            </button>
        </footer>
    )
    }

export default Rodape
