addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('pesquisar');
    const input = document.getElementById('Search');
    const url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url + input.ariaValueMax.trim())
    .then(response => {
        if(!response.ok){
            throw new Error('Não foi possivel encontar o pokemon');
        }
        return response.json();
    });

});