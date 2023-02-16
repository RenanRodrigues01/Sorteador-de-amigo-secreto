import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const msgDeErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem 
}