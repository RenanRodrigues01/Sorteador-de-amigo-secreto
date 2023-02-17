import { useRecoilValue } from "recoil"
import { listaDeparticipantesState } from "../atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaDeparticipantesState);
}