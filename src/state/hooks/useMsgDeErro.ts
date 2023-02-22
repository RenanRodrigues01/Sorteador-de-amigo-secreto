import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMsgDeErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem 
}