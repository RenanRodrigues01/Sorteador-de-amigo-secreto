import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Rodape from "./Rodape";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
const mockNavegação = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegação
    }
} )
describe('quando não existem participantes suficientes' , () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada com menos de 3 participantes', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['josefina', 'maria', 'jose'])
    })
    test('A brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).not.toBeDisabled()
    })

    test('A brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockNavegação).toHaveBeenCalledTimes(1)
        expect(mockNavegação).toHaveBeenCalledWith('/sorteio')
    } )
})