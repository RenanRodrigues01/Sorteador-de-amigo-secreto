import { useRef, useState } from "react"

const Form = () => {

  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setNome('');
    inputRef.current?.focus()
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
    </form>
  )
}

export default Form
