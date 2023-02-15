import { useSetRecoilState } from "recoil"
import { listaDeparticipantesState } from "../atom"
export const useAdicionaParticipante = () => {
    const setLista = useSetRecoilState(listaDeparticipantesState);

    return (nomeDoParticipante: string) => {
        return setLista(listaAnterior => [...listaAnterior, nomeDoParticipante])
    }
}