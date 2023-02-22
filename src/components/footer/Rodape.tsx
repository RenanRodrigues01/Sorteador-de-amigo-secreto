import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import { useSorteador } from "../../state/hooks/useSorteador";

const Rodape = () => {
    const participantes = useListaDeParticipantes();
    const navigate = useNavigate()
    const sorteio = useSorteador()

    const iniciar = () => {
        navigate('/sorteio');
        sorteio();
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
