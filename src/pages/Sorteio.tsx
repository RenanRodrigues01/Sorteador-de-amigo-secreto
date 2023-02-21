import { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";


const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setPartipanteDaVez] =useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLSelectElement>) => {
    evento.preventDefault();
    if(resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }
  return (
    <section>
      <form>
        <select onSubmit={sortear}
          name="participanteDaVez" 
          id="participanteDaVez"
          placeholder="selecione o seu nome"
          value={participanteDaVez}
          onChange={e => setPartipanteDaVez( e.target.value)}
        >
          {participantes.map( participante => <option key={participante}>{participante}</option>)}
        </select>

        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
    </section> 
  )
}

export default Sorteio
