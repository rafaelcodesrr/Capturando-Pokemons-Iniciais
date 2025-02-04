function escolherPokemon(numero) {
    let pokemons = {
        1: "Bulbasaur",
        2: "Charmander",
        4: "Pikachu",
        5: "Mewtwo"
    };
    
    if (pokemons[numero]) {
        console.log(`Voce escolheu o ${pokemons[numero]} como seu Pokemon inicial.`);
    } else {
        console.log("Escolha inválida. Por favor, selecione um número válido.");
    }
}

// Exemplos de uso:
escolherPokemon(1);
escolherPokemon(2);
escolherPokemon(4);
escolherPokemon(5);
escolherPokemon(3);
