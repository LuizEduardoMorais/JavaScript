function verificar() {
   const data = new Date();
   const ano = data.getFullYear();
   const fAno = document.getElementById('txtano')
   var res = document.querySelector('#res');
   if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        res.innerHTML = '[ERROR] Verifique os dados novamente!'
        res.style.background = 'red'
        res.style.color = 'white'
        
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    res.style.background = 'white'
    res.style.color = 'black'
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 4) {
            //bebê
            img.setAttribute('src', 'img/bebe-m.jpg');
        } else if (idade <= 12) {
            //criança
            img.setAttribute('src', 'img/criança-m.jpg');
        } else if (idade <= 21) {
            //jovem
            img.setAttribute('src', 'img/jovem-m.jpg');
        } else if (idade <= 50) {
            img.setAttribute('src', 'img/adulto-m.jpg');
        } else if (idade <= 100) {
            //idoso
            img.setAttribute('src', 'img/idoso-f.jpg');
        } else {
            //
            img.setAttribute('src', 'img/fim.jpg')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 4) {
            //bebê
            img.setAttribute('src', 'img/bebe-f.jpg');
        } else if (idade <= 12) {
            //criança
            img.setAttribute('src', 'img/criança-f.jpg');
        } else if (idade <= 21) {
            //jovem
            img.setAttribute('src', 'img/jovem-f.jpg');
        } else if (idade <= 50) {
            //adulto
            img.setAttribute('src', 'img/adulto-f.jpg');
        } else if (idade <= 100) {
            //idoso
            img.setAttribute('src', 'img/idoso-f.jpg');
        } else {
            //
            img.setAttribute('src', 'img/fim.jpg')
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`;
    res.appendChild(img);
   }
}