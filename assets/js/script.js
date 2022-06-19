
const totalidad = () => {

    let cantidadDesk = document.getElementById('quantity').value;
    let precio = document.getElementById('price').getAttribute('value');
    let color = document.getElementById('color').value;
    let totalidad = cantidadDesk * precio

    document.getElementById("total").innerHTML = totalidad.toLocaleString();
    document.getElementById("quanti").innerHTML = cantidadDesk;
    document.getElementById("colorsito").style.backgroundColor = color;
}
