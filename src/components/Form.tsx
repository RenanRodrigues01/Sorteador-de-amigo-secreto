import { useRef, useState } from "react"
import { useAdicionaParticipante } from "../state/hooks/useAdicionaParticipante";
import { usemsgDeErro } from "../state/hooks/useMsgDeErro";

const Form = () => {

  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionalNaLista = useAdicionaParticipante();
  const msgDeErro = usemsgDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionalNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
        <input 
          ref={inputRef}
          value={nome}
          onChange={e => setNome(e.target.value)}
          type="text" 
          placeholder="Insira os nomes dos participantes" 
        />
        <button disabled={!nome}>Adicionar</button>
        {msgDeErro && <p role='alert'>{msgDeErro}</p>}
    </form>
  )
}

export default Form
