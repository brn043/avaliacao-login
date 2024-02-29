    function login(){
        const login = document.getElementById('inLogin').value;
        const senha = document.getElementById('inSenha').value;
    
        if (login == 'admin' && senha == 'admin') {
          
            location.href = "./pages/pokemon.html";
        } 
        else {
            alert('Usúario ou senha incorreto')        
        }
    
    }