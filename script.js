
function Calcular() {
  let fipe = document.getElementById('fipe').value
  let desconto = document.getElementById('desconto')
  let resultado = document.getElementById('resultado')
  let res = document.getElementById('res-desconto')
  let vist = document.getElementById('vistoria').value

  // Transformando o numero em inteiro e removendo os caracteres.
  let n1 = Number(parseInt(fipe.replace(/\D/g, "")))
  let n2 = Number(desconto.value)
  
  if (vist == 1) {
    let laudo = 0
    if (n1 <= 100000){
      laudo = 150
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    } else if (n1 > 100000 && n1 <= 200000) {
      laudo = 250
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    }else if (n1 > 200000 && n1 <= 300000 ){
      laudo = 350
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    }else {
      laudo = n1
      laudo = laudo * 0.002
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    }
    let desc = laudo - (laudo * (n2/100))
    if (n2 > 0){
    res.innerHTML = `Com desconto de ${n2}% --> R$ ${desc}`
    res.style.color = '#007d4d'
    }else {
    res.innerHTML = ''
    }
  }else if (vist == 2) {
    let laudo = 0
    if (n1 <= 100000){
      laudo = 250
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    } else if (n1 > 100000 && n1 <= 200000) {
      laudo = 350
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    }else if (n1 > 200000 && n1 <= 300000 ){
      laudo = 450
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    }else {
      laudo = n1
      laudo = laudo * 0.002
      resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
    }
    let desc = laudo - (laudo * (n2/100))
    if (n2 > 0){
    res.innerHTML = `Com desconto de ${n2}% --> R$ ${desc}`
    res.style.color = '#007d4d'
    }else {
    res.innerHTML = ''
    }
  } else {
      let laudo = 0
      if (n1 <= 100000){
        laudo = 350
        resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
      } else if (n1 > 100000 && n1 <= 200000) {
        laudo = 450
        resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
      }else if (n1 > 200000 && n1 <= 300000 ){
        laudo = 550
        resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
      }else {
        laudo = n1
        laudo = laudo * 0.002
        resultado.innerHTML = `<strong>Valor da vistoria --> R$ ${laudo}</strong>`
      }
      let desc = laudo - (laudo * (n2/100))
      if (n2 > 0){
      res.innerHTML = `Com desconto de ${n2}% --> R$ ${desc}`
      res.style.color = '#007d4d'
      }else {
      res.innerHTML = ''
      }
  }
}


