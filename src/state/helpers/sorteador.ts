import shuffle from "just-shuffle"
export function sorteador(participantes: string[]): Map<string, string> {
    const totalDeParticipantes = participantes.length;
    //usando uma biblioteca externa para embaralhar o array original
    const embaralhado = shuffle(participantes);
    //o obejto Map gera uma chave valor, desta forma guardando o sorteador e o sorteado
    const resultado = new Map<string, string>()

    //looping responsavel por iteirar o array e gerar o sorteador e o sorteado 
    for (let index = 0; index < participantes.length; index++) {
        /*Armazena o indice posterior ao atual, se o indice atual é zero armazena o 1,
        se é 2 armazena o 3, e se for o ultimo indice aramzena o 0.
        Criando assim a order de sorteio */
        const amigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;

        /*como o objeto Map cria uma chave valor, vamos ter um ordem armazenada
        onde o primeiro da lista tira o segundo, o segundo tira o terceiro,
        e o ultimo tira o primeiro*/
        resultado.set(embaralhado[index], embaralhado[amigo]);
    }
    return resultado

}