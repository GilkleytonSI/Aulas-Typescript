let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLInputElement;
let res = document.getElementById('resultado') as HTMLInputElement;

function calcular(n1: number, n2: number) {
    return n1 + n2;
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular(+numero1.value, +numero2.value ).toString();
});



// Exemplo de comando pra gerar o arquivo e verifica se tem erro, dai não deixa criar o arquivo
// tsc src/script.ts --noEmitOnError
