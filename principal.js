let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener('click', ()=>{

let nome = document.getElementById('nome').value
let base = Number(document.getElementById('areaBase').value)
let altura = Number(document.getElementById('altura').value)
let raio = Number(document.getElementById('raio').value)
let valorFinal = 0;

const volume = new Volume(base, altura, raio)

if((nome === "prisma") || (nome === "Prisma")) {
    valorFinal = volume.calculaPrisma();
    resposta.innerHTML = `O volume do prisma é ${valorFinal.toFixed(2)} cm3`  
} else if ((nome === "pirâmide") || (nome === "Pirâmide")) {
    valorFinal = volume.calculaPiramide();
    resposta.innerHTML = `O volume da pirâmide é ${valorFinal.toFixed(2)} m3`
} else if ((nome === "cilindro") || (nome === "Cilindro")) {
    valorFinal = volume.calculaCilindro();
    resposta.innerHTML = `O volume do cilindro é ${valorFinal.toFixed(2)} cm3`
} else if ((nome === "cone") || (nome === "Cone")) {
    valorFinal = volume.calcularCone();
    resposta.innerHTML = `O volume do cone é ${valorFinal.toFixed(2)} cm3`
} else if ((nome === "esfera") || (nome === "Esfera")) {
    valorFinal = volume.calculaEsfera();
    resposta.innerHTML = `O volume da esfera é ${valorFinal.toFixed(2)} m3`
} else {
    resposta.innerHTML = "Esse sólido não existe, por favor digite um dos seguintes valores: Prisma, Pirâmide, Cilindro, Cone ou Esfera"   
}

});