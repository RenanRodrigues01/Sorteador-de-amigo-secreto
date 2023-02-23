import { useState } from "react";
import Card from "../components/card/Card";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";

import "./Sorteio.css"


const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setPartipanteDaVez] =useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if(resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }

    setTimeout(() => {
      setAmigoSecreto('')
    }, 2000);
  }
  return (
    <Card>

      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select 
            name="participanteDaVez" 
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={e => setPartipanteDaVez( e.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map( participante => <option key={participante}>{participante}</option>)}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear">Sortear</button>
        </form>

        {amigoSecreto && <p className="resultado" role='alert' >{amigoSecreto}</p>}

        <footer className="sorteio">
          <img src="/img/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
        </footer>
      </section> 
      
    </Card>
  )
}

export default Sorteio
