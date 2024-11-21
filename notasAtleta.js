// Função que recebe a lista de atletas e calcula a média válida de cada um
function calcularMediaAtletas(atletas) {
    // Laço para percorrer todos os atletas
    atletas.forEach(atleta => {
        // Ordena as notas em ordem crescente
        let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
        
        // Elimina a maior e a menor nota (primeira e última após ordenar)
        let notasValidas = notasOrdenadas.slice(1, -1);

        // Calcula a média das notas válidas
        let somaNotas = notasValidas.reduce((acc, nota) => acc + nota, 0);
        let media = somaNotas / notasValidas.length;

        // Exibe os resultados
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
        console.log(`Média Válida: ${media.toFixed(6)}`);
        console.log("");  // Linha em branco para separar cada atleta
    });
}

// Dados dos atletas
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Chama a função para calcular e exibir as médias
calcularMediaAtletas(atletas);
