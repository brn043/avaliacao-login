    function pesquisar(){
        const input = document.getElementById('Search');
        const url = "https://pokeapi.co/api/v2/pokemon/";

    
        fetch(url + input.value.trim())
        .then(response => {
            if(!response.ok){
                throw new Error('Não foi possivel encontar o pokemon');
            }
            return response.json();
        })
        .then(data =>{
            let infos = data;
            let imagem = document.getElementById('image');
            imagem.innerHTML = infos.sprites.back_default;
            let nome = document.querySelector('#nome');
            nome.InnerHTML = infos.name;
            const descricao = document.getElementById('desc');
            console.log(data);
        });
    }