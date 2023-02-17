import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
describe('Na pagina de Sorteio', () => {
    const participantes = ['clara', 'eliana', 'josue'];
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('todos os participantes podem exibir seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length)
    })
})