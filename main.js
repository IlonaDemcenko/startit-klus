const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
vielasPoga.addEventListener('click', function() {


    vielasPoga.classList.toggle('selected');
    for (let i = 0; i < aprikojumsRindas.length; i++) {
  /*      if (aprikojumsRindas[i].classList.contains('slepts')) {
            aprikojumsRindas[i].classList.remove('slepts');
        } else {
            aprikojumsRindas[i].classList.add('slepts');
        }
    }*/
     aprikojumsRindas[i].classList.toggle('slepts');
}
});

const aprikojumsPoga = document.getElementById('aprikojums-poga');
const vielasRindas = document.getElementsByClassName('vielas');
aprikojumsPoga.addEventListener('click', function() {


    aprikojumsPoga.classList.toggle('selected');
    for (let i = 0; i < vielasRindas.length; i++) {
     vielasRindas[i].classList.toggle('slepts');
}
});

const vissPoga = document.getElementById('viss-poga');
const vissRindas = document.getElementsByClassName('vielas');///// abas klases
vissPoga.addEventListener('click', function() {


    vissPoga.classList.toggle('selected');
    for (let i = 0; i < vissRindas.length; i++) {
     vissRindas[i].classList.toggle('slepts');
}
});