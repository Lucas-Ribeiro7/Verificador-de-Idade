function verificar(){
    var ano = document.getElementById('ano').value;
    var res = document.querySelector('div#res');
    var anoAtual = 2020;
    var idade = (anoAtual - ano);
    if (ano > anoAtual){
        alert("[ERRO] Verifique os dados e tente novamente.");
    } else {
        var sexo = document.getElementsByName('sexo');
        var genero = '';
        var img = document.createElement('img'); //Como se ele criasse uma tag chamada img 
        img.setAttribute('id', 'foto'); //Colocou o ID na tag chamada 'foto'
        if (sexo[0].checked){
            genero = 'Masculino';
            if (idade<5){
                //BEBE
                img.setAttribute('src', 'imagens/bebe.jpg');
            } else if (idade < 12){
                //Criança  
                img.setAttribute('src', 'imagens/menino.jpg');              
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/garoto.jpg');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/homem.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.jpg');
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino';
            if (idade >= 0 && idade<5){
                //BEBE
                img.setAttribute('src', 'imagens/bebe.jpg');
            } else if (idade < 12){
                //Criança  
                img.setAttribute('src', 'imagens/menina.jpg');              
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/garota.jpg');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulher.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.jpg');
            }
        }
        }
        res.style.textAlign = "center"; //Centraliza ultilizando o JS
        res.innerHTML = "Resultado: " + (genero) + ", detectamos que você tem " + (idade) + " anos<br>";
        img.setAttribute('height', '250');
        img.setAttribute('width', '250');
        res.appendChild(img);
    }
