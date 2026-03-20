async function loadScript() {
    let script = document.createElement('script'); //Skapar ett <script> element
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init'; //Lägger till värde av attributet src till elementet
    document.head.appendChild(script); //Lägger till elementet script som sista barn i body
}

window.onload = loadScript; //onload anropar loadScript()

AIzaSyDgVm8GOdbi-71I92NRK319Kd6Vr1hwiQk

MEKMAPID750330
2bbfa0ae181b844db2d00361

60.6639357, 17.2111360