import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";

test('quando o input está vazio, novos participantes não podem ser adicionados', ()=>{
    //renderizar o componente no qual quremos fazer o teste
    render(<Form />);

    //encontar no DOM o imput
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    //encontar o botão
    const button = screen.getByRole('button');
    //garantir que o input está no documento
    expect(input).toBeInTheDocument()
    //garantir que o input está desabilitado
    expect(button).toBeDisabled()
})