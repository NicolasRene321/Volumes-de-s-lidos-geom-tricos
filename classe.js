class Volume {
    constructor (area_base,high,raio){
    this.area_base = area_base
    this.high = high
    this.raio = raio
}

calculaPrisma(){
    let volume = 0
    volume = this.area_base * this.high
    return volume
}

calculaPiramide(){
    let volume = 0
    volume = (this.area_base * this.high / 3) (this.area_base + this.high)
    return volume

}

calculaCilindro(){
    let volume = 0
    volume = 3.14 * (this.raio * this.raio) * this.high
    return volume

}

calcularCone(){
    let volume = 0
    volume = (3.14 * (this.raio * this.raio) * this.high) / 3
    return volume

}

calculaEsfera(){
    let volume = 0
    volume = (  4 * 3.14 * Math.pow(this.raio,3)) / 3
    return volume

}

}
