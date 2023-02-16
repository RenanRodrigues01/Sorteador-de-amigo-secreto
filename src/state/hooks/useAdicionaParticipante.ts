import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaDeparticipantesState } from "../atom";

export const useAdicionaParticipante = () => {
    const setLista = useSetRecoilState(listaDeparticipantesState);
    const lista = useRecoilValue(listaDeparticipantesState);
    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante: string) => {
        if(lista.includes(nomeDoParticipante)) {
            setErro('nomes iguais não podem ser adicionados');
            return
        }
        return setLista(listaAnterior => [...listaAnterior, nomeDoParticipante]);
    }
}