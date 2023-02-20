
describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participante não pode sortear ele mesmo', () => {
        const participantes = [
            'Renan',
            'Celia',
            'Maria',
            'Dom pedro',
            'Samira',
            'Ayla'
        ]

        const sorteio = sorteador(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})