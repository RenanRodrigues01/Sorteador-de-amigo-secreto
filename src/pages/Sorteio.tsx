import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"


const Sorteio = () => {
    const participantes = useListaDeParticipantes()
  return (
    <form>
        <select name="participanteDaVez" id="participanteDaVez">
            {participantes.map( participante => <option key={participante}>{participante}</option>)}
        </select>
    </form>
  )
}

export default Sorteio
