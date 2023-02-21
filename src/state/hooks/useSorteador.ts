
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecretoState } from "../atom";
import { sorteador } from "../helpers/sorteador";
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = ( ) => {
    const participantes = useListaDeParticipantes();
    //criando um set dentro do state para guardar o resultado final
    const setResultado = useSetRecoilState(resultadoAmigoSecretoState);

    return () => {
        const resultado = sorteador(participantes)
        //Guarda o resultado final no state criado. 
        setResultado(resultado);
    }
}