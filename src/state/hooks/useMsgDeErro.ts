import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const usemsgDeErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem 
}