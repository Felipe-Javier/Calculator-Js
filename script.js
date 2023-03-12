let pantalla = document.getElementById('pantalla');

let botones = Array.from(document.getElementsByTagName('button'));

 const limpiar = () => {
    pantalla.value = '';
}

const mostrar = (n) => {
    pantalla.value += n;
}

const calc = () => {
    if (pantalla.value){   
        try {
            pantalla.value = eval(pantalla.value);
        } catch {
            pantalla.value = 'Error!!'
        }
    }
} 

const  borrar = () => {
    if(pantalla.value){
        pantalla.value = pantalla.value.slice(0, -1);

    }
}
