import { act, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import List from "./List";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
describe('uma lista de participantes vazia', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a lista deve ser renderizada vazia', () => {
        render(
            <RecoilRoot>
                <List />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');

        expect(itens).toHaveLength(0)
    })
})


describe('uma lista de participantes preenchida', () => {
    const participantes = ['ana', 'catarina'];

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('a lista deve ser renderizada preenchida', () => {
        render(
            <RecoilRoot>
                <List />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');
        
        act(() => {
            expect(itens).toHaveLength(participantes.length)
        })
        
    })
})