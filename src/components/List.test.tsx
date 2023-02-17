import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import List from "./List";

describe('uma lista de participantes vazia', () => {
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
    test('a lista deve ser renderizada preenchida', () => {
        render(
            <RecoilRoot>
                <List />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');

        expect(itens).toHaveLength(0)
    })
})