import React from 'react';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';

const List = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul>
        {participantes.map( participante => <li key={participante}>{participante}</li> )}
    </ul>
  )
}

export default List
