import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Home from "./Home";

const mockNavegação = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegação
    }
} )
describe('A pagina inicial', () => {
    test('Deve renderizar corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <Home />
            </RecoilRoot>
        );
        
        expect(container).toMatchSnapshot()
    })
})