const robotron = document.querySelector(".robo");
const subtrair =  document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

somar.addEventListener("click", (evento) => {
    braco.value += parse.int(braco.value);
})

//      Extra       //
robotron.addEventListener("click", dizOi);

function dizOi() {
    alert('Olá!\n\nBem vindo ao ROBOTROM2000');
}

const segundo = 1000;

function numSecretos() {
    const segredo = [
        { num: '1', val: 151 },
        { num: '2', val: 251 },
        { num: '3', val: 386 },
        { num: '4', val: 494 },
        { num: '5', val: 649 },
        { num: '6', val: 721 },
        { num: '7', val: 809 },
        { num: '8', val: 898 },
        { num: '?', val: 905 },
        { num: '9', val: 1008 }
    ];
        
    for(let i = 0; i<10; i++) {
        setTimeout(() => { 
        console.log(`${segredo[i].num}\n${segredo[i].val}`);
        }, segundo * i);
    }
    setTimeout(() => {
        console.clear();
      }, segundo * 10);
}

numSecretos();
setInterval(numSecretos, segundo * 20);
