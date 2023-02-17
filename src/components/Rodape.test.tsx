import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";

describe('onde não existem participantes suficientes' , () => {
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