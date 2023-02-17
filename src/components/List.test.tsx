import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import List from "./List";

describe('A lista de participantes', () => {
    test('uma lista vazia de participantes', () => {
        render(
            <RecoilRoot>
                <List />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');

        expect(itens).toHaveLength(0)
    })
})