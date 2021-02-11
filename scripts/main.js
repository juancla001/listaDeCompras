var pantallaCarga = new bootstrap.Modal(document.getElementById('pantallaCarga'), {})

let guardar = document.getElementById(`pantallaCargaAdd`).addEventListener(`click`, function(){
    let producto = document.getElementById(`pantallaCargaProducto`).value //el .value me busca lo que tenga dentro de pantallacargaproducto
    let icono = document.getElementById(`pantallaCargaIcono`).value //el .value me busca lo que tenga dentro de pantallacargaproducto
    let info = document.getElementById(`pantallaCargaInfo`).value //el .value me busca lo que tenga dentro de pantallacargaproducto
    document.getElementById(`pantallaCargaProducto`).value = ``
    document.getElementById(`pantallaCargaIcono`).value = ``     //aca el value se borra cuando cargo el producto
    document.getElementById(`pantallaCargaInfo`).value = ``
    let modelo = `<li class="list-group-item"><img src="image/fruits.svg" alt="${producto}" class="pantalla_listado_icono">${producto}</li>`
    alert(producto, icono, info)
    pantallaCarga.hide()
    
})
