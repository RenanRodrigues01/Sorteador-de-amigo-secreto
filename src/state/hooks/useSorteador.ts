import shuffle from "just-shuffle"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const sorteador = ( ) => {
    const participantes = useListaDeParticipantes();

    return () => {
        const totalDeParticipantes = participantes.length;
        const embaralhado = shuffle(participantes);
        const resultado = new Map<string, string>()

        for (let index = 0; index < participantes.length; index++) {
            const amigo = index == (totalDeParticipantes - 1) ? 0 : index + 1;
            resultado.set(embaralhado[index], embaralhado[amigo]);
        }
    }
}