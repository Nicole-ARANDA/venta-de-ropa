//Venta de Ropa Online

//Mensaje de bienvenida
alert('BIENVENID@, espero que encuentres lo que estas buscando!!!')

//elegir para quien compra
let genero = parseInt(
    prompt(
        'Decime para quien deseas comprar: 1.Ellas - 2.Ellos - 3.Niños / Niñas'
    )
 )
  // Lista de Ropa
    let ropa = parseInt(
        prompt(
          'Escoge la prenda que le deseas comprar: 1.Remera - 2.Babucha - 3.Buzo - 4.Short - 5.Pijama'
        )
      )  
      let totalCompra = 0
      let seguirComprando = true
      let decision
  
      class Ropa {
        constructor(id, nombre, precio) {
          this.id = id
          this.nombre = nombre
          this.precio = precio
        }
      }
      const remera = new Ropa(1, 'Remera', 750)
      const babucha = new Ropa(2, 'Babucha', 1000)
      const buzo = new Ropa(3, 'Buzo', 1200)
      const short = new Ropa(4, 'Short', 900)
      const pijama = new Ropa(5, 'Pijama', 1500)
  
      while (seguirComprando === true) {
        if (ropa === 1) {
        totalCompra = totalCompra + remera.precio
        } else if (ropa === 2) {
           totalCompra = totalCompra + babucha.precio
        } else if (ropa === 3) {
           totalCompra = totalCompra + buzo.precio
        } else if (ropa === 4) {
           totalCompra = totalCompra + short.precio
        } else if (ropa === 5) {
           totalCompra = TotalCompra + pijama.precio 
        } else {
           ropa = parseInt(
            prompt(
              'Selecciona un numero dentro de la lista: 1.Remera - 2.Babucha - 3.Buzo - 4.Short - 5.Pijama'
            )
          )
          continue
        }
        decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))

        if (decision === 1) {

            genero = parseInt(
                prompt(
                    'Decime para quien deseas comprar ahora: 1.Ellas - 2.Ellos - 3.Niños / Niñas'
                )
             )
            ropa = parseInt(
                prompt(
                  'Selecciona el producto que deseas seguir comprando: 1.Remeras - 2.Babuchas - 3.Buzo - 4.Short - 5.Pijama'
                )
            )
        } else {
          seguirComprando = false
        }
      }
      alert(`El total de tu compra es: $ ${totalCompra}`)
      // Mensaje de despedida
      alert('GRACIAS POR TU COMPRA!!! Vuelve Pronto :D')