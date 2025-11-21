async function loadScript() {
    let script = document.createElement('script'); //Skapar ett <script> element
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init'; //Lägger till värde av attributet src till elementet
    document.head.appendChild(script); //Lägger till elementet script som sista barn i body
}

window.onload = loadScript; //onload anropar loadScript()