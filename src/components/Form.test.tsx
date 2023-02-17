import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import Form from "./Form";

describe('Comportamento do Form.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', ()=>{
        //renderizar o componente no qual quremos fazer o teste
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );
    
        //encontar no DOM o imput
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        //encontar o botão
        const button = screen.getByRole('button');
        //garantir que o input está no documento
        expect(input).toBeInTheDocument();
        //garantir que o input está desabilitado
        expect(button).toBeDisabled();
    })
    
    test("Adicionar um participante, caso exista um nome preenchido", () => {
    
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );
        
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
    
        //inserir um valor no input
        fireEvent.change( input, {
            target: {
                value: 'josé'
            }
        });
        //submeter o formulario
        fireEvent.click(button);
        // apos a submição espero que o input tenha o foco
        expect(input).toHaveFocus();
        //espero que o input esteja vazio
        expect(input).toHaveValue("");
    })
    
    test('Nomes duplicados não podem ser adicionados na lista', () => {
    
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );
        
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
    
        //inserir um valor no input
        fireEvent.change( input, {
            target: {
                value: 'josé'
            }
        })
        fireEvent.click(button);
    
        //inserindo o mesmo valor na lista
        fireEvent.change( input, {
            target: {
                value: 'josé'
            }
        });
        fireEvent.click(button);
    
        const msgDeErro = screen.getByRole('alert');
    
        expect(msgDeErro.textContent).toBe('nomes iguais não podem ser adicionados');
    })
    
    test('O alerta deve desaparecer após N segundos', () => {
    
        jest.useFakeTimers();
    
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );
        
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
    
        //inserir um valor no input
        fireEvent.change( input, {
            target: {
                value: 'josé'
            }
        });
        fireEvent.click(button);
        
        act(() => {
            //inserindo o mesmo valor na lista
            fireEvent.change( input, {
                target: {
                    value: 'josé'
                }
            });
        })
        
        fireEvent.click(button);
        //ao tentar adicionar dois nomes repetidos o erro aparece na tela
        let msgDeErro = screen.queryByRole('alert');
        expect(msgDeErro).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        });
       
        //após as contagens de timers a mensagem não pode mais estar no documento
        msgDeErro = screen.queryByRole('alert');
        expect(msgDeErro).toBe(null);
    }) 
})
