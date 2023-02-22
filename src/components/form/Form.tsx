import { useRef, useState } from "react"
import { useAdicionaParticipante } from "../../state/hooks/useAdicionaParticipante";
import { useMsgDeErro } from "../../state/hooks/useMsgDeErro";

import 'Form.css'

const Form = () => {

  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionalNaLista = useAdicionaParticipante();
  const msgDeErro = useMsgDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionalNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input 
            ref={inputRef}
            value={nome}
            onChange={e => setNome(e.target.value)}
            type="text" 
            placeholder="Insira os nomes dos participantes" 
          />
          <button disabled={!nome}>Adicionar</button>
      </div>
      {msgDeErro && <p className="alerta erro" role='alert'>{msgDeErro}</p>}
    </form>
  )
}

export default Form
