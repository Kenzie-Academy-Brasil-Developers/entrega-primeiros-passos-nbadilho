let nome=prompt("Entre com o nome do aluno");

if(nome.length<5){
    alert("Nome é inválido");
}

let presenca=parseInt(prompt("Qual a presença?"));
let somaPresenca=presenca;
let mediaPresenca=somaPresenca;

if(presenca>10 || presenca<0){
    alert("Valor é inválido")
}

let materiaMatematica=prompt("Digite a materia");
let notaMatematica=parseFloat(prompt("Qual a nota?"))

if(notaMatematica>10 || notaMatematica<0){
    alert("Valor é inválido")
}

let materiaPortugues=prompt("Digite a materia");
let notaPortugues=parseFloat(prompt("Qual a nota?"))

if(notaPortugues>10 || notaPortugues<0){
    alert("Valor é inválido")
}

let materiaInformatica=prompt("Digite a materia");
let notaInformatica=parseFloat(prompt("Qual a nota?"))

if(notaInformatica>10 || notaInformatica<0){
    alert("Valor é inválido")
}

let materiaGeografia=prompt("Digite a materia");
let notaGeografia=parseFloat(prompt("Qual a nota?"))

if(notaGeografia>10 || notaGeografia<0){
    alert("Valor é inválido")
}

let materiaIngles=prompt("Digite a materia");
let notaIngles=parseFloat(prompt("Qual a nota?"))

if(notaIngles>10 || notaIngles<0){
    alert("Valor é inválido")
}

let materiaHistoria=prompt("Digite a materia");
let notaHistoria=parseFloat(prompt("Qual a nota?"))

if(notaHistoria>10 || notaHistoria<0){
    alert("Valor é inválido")
}

let materiaFilosofia=prompt("Digite a materia");
let notaFilosofia=parseFloat(prompt("Qual a nota?"))

if(notaFilosofia>10 || notaFilosofia<0){
    alert("Valor é inválido")
}

let materiaSociologia=prompt("Digite a materia");
let notaSociologia=parseFloat(prompt("Qual a nota?"))

if(notaSociologia>10 || notaSociologia<0){
    alert("Valor é inválido")
}

let materiaLiteratura=prompt("Digite a materia");
let notaLiteratura=parseFloat(prompt("Qual a nota?"))

if(notaLiteratura>10 || notaLiteratura<0){
    alert("Valor é inválido")
}

let materiaEducacaoFisica=prompt("Digite a materia");
let notaEducacaoFisica=parseFloat(prompt("Qual a nota?"))

if(notaEducacaoFisica>10 || presenca<0){
    alert("Valor é inválido")
}

let somaNota= notaGeografia + notaInformatica +notaMatematica +notaPortugues +notaIngles +notaHistoria +notaFilosofia +notaSociologia +notaLiteratura +notaEducacaoFisica;
let mediaNota=somaNota/10;

if(mediaNota>=8 && presenca>=6){
    alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca}: Aluno aprovado!`)
}else{
    alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca}: Aluno reprovado!`)
}

