function toggleExpand(id) {
	let elem = document.getElementById(id)
	/* toggle rimuove oppure inserisce una classe */
	elem.classList.toggle("close")
}
/*  drag notepad e calcolatrice   */
const position = {
	x: 0,
	y: 0
}
interact('.draggable').draggable({
	listeners: {
		start(event) {
			console.log(event.type, event.target)
		},
		move(event) {
			position.x += event.dx
			position.y += event.dy

			event.target.style.transform =
				`translate(${position.x}px, ${position.y}px)`
		},
	}
})
/* cambia lo sfondo */

let wallaper1 = document.querySelector('#wallaper-1');
let wallaper2 = document.querySelector('#wallaper-2');
let wallaper3 = document.querySelector('#wallaper-3');
let wallaper4 = document.querySelector('#wallaper-4');
let wallaper5 = document.querySelector('#wallaper-5');
let wallaper6 = document.querySelector('#wallaper-6');
let wallaper7 = document.querySelector('#wallaper-7');
let wallaper8 = document.querySelector('#wallaper-8');
let wallaper9 = document.querySelector('#wallaper-9');
let wallaper10 = document.querySelector('#wallaper-10');
let wallaper11 = document.querySelector('#wallaper-11');
let wallaper12 = document.querySelector('#wallaper-12');
wallaper1.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo.png')";
});
wallaper2.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo2.png')";
});
wallaper3.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo3.png')";
});
wallaper4.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo4.png')";
});
wallaper5.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo5.png')";
});
wallaper6.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo6.png')";
});
wallaper7.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo7.png')";
});
wallaper8.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo8.png')";
});
wallaper9.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo9.png')";
});
wallaper10.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo10.png')";
});
wallaper11.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo11.png')";
});
wallaper12.addEventListener('click', () => {
	document.body.style.backgroundImage = "url('assets/img/sfondo12.gif')";
});
function sfondolink() {
	let url2 = document.getElementById("sfondolink").value;
	if (url2 == ""){
		url2 = "assets/img/sfondoerror.png"
		}
	sfondlink2(url2)
	
	}
	function sfondlink2(stampasfondo){
		console.log(stampasfondo)
		document.body.style.backgroundImage = "url('" + stampasfondo + "')";
	}
	

/* calcolatrice */
let first
let operation
let second

function pressNuber(n) {
	/*   converto da numero a stringa */
	n += ''
	if (!operation) {
		/* operatore ternario */
		first = (!first) ? n : first + n
		/*  cambio il testo al interno del id */
		document.getElementById("history-value").innerText = first;
		document.getElementById("output-value").innerText = "";
	} else {
		second = (!second) ? n : second + n

		document.getElementById("history-value").innerText = second;
	}
}

function pressOperation(op) {
	if (!!second) pressTotal()

	if (!!first) operation = op
	document.getElementById("history-value").innerText += op;
}

function pressTotal() {
	first = '' + execute(+first, operation, +second)
	operation = null
	second = null
	document.getElementById("history-value").innerText = "";
	document.getElementById("output-value").innerText = first;
}

function execute(a, op, b) {
	switch (op) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			return a / b
	}
	return 0
}
/*  cancella tutto */
function erase() {
	first = null
	operation = null
	second = null
	document.getElementById("output-value").innerText = "0";
	document.getElementById("history-value").innerText = "";

}
/* cancella solo il primo valore */
function erase2() {

	first = first.slice(0, -1)
	document.getElementById("history-value").innerText = first;

	document.getElementById("output-value").innerText = "";



}   

/* funzione orologio */
function functorun() {
var data = new Date();
var Hh, Mm, Ss, mm;
Hh = data.getHours() + ":";
Mm = data.getMinutes();
var data = new Date();
var gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();

if (Mm < 9 ) {
	Mm = "0"+ Mm
}
document.getElementById("calendario").innerText = (Hh + Mm ) + "\n" + (  mm + gg + aaaa) ;
}
functorun();
setInterval(functorun, 1*1000);


/* funzone browser */
function urlbrowser() {
let url = document.getElementById("url").value;
if (url == ""){
url = "https://duckduckgo.com"
}
sito(url)
}
function sito(stampaurl) {
urlcontrollo = stampaurl.includes('https://')
	if  (urlcontrollo == 0 ) {
		document.getElementById("iframebrowser").src = "https://"+ stampaurl;
		document.getElementById("namepagebrowser").innerText = stampaurl;
	}else{
		document.getElementById("iframebrowser").src = stampaurl;
		document.getElementById("namepagebrowser").innerText = stampaurl;
	}
}

/* funzione cronometro */

let minuti = 0;
let secondi = 0;
let millisecondi = 0;

function cronometrominuti() {
minuti= minuti + 1;     

document.getElementById("minuti").innerText =  minuti;
}
function cronometrosecondi() {

    if (secondi < 60) {
        secondi= secondi + 1;     
        document.getElementById("secondi").innerText =   secondi;
    } else {
        secondi= 0;
    }
   
    }
    function cronometromillisecondi() {
      millisecondi= millisecondi + 1;     
      document.getElementById("millisecondi").innerText =   millisecondi;
      }
 
     

   function startcronometro(){
    minuti11= setInterval(cronometrominuti, 60000);
     secondi11= setInterval(cronometrosecondi, 1000);
     millisecondi11= setInterval(cronometromillisecondi, 1);
    }

function stopcronometro(){
    clearInterval(minuti11);
    clearInterval(secondi11);
    clearInterval(millisecondi11);
}

function resetcronometro(){
	clearInterval(minuti11);
    clearInterval(secondi11);
    clearInterval(millisecondi11);
    minuti = 0;
    secondi = 0;
    millisecondi = 0;
	document.getElementById("minuti").innerText =   "00";
    document.getElementById("secondi").innerText =  "00";
    document.getElementById("millisecondi").innerText =  "00";
}



