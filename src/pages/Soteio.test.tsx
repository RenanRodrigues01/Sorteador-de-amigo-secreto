import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

jest.mock('../state/hooks/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})
describe('Na pagina de Sorteio', () => {

    const participantes = ['clara', 'eliana', 'josue'];
    const resultado = new Map([
        ['clara', 'eliana'],
        ['eliana', 'josue'],
        ['josue', 'clara']
    ])
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
    })
    test('todos os participantes podem exibir seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length + 1)
    })

    test('O amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText('selecione o seu nome')
        fireEvent.change(select, () => {
            target: {
                value: participantes[0]
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const amigoSecreto = screen.getByRole('alert')
        expect(amigoSecreto).toBeInTheDocument()
    })
})