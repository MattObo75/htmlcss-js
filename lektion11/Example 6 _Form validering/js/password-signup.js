(function() {
    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("conf-password");

    function setErrorHighlighter (e) {
        let target = e.target || e.srcElement;
        if(target.value.length < 8) {
            target.className = "fail";
        } else {
            target.className = "pass";
        }

    }
    
    function removeErrorHighlighter(e) {
        let target = e.target || e.srcElement;
        if(target.className === "fail") {
            target.className = "";
        }
    }

    function passwordsMatch (e) {
        let target = e.target || e.srcElement;
        if((password.value === target.value) && target.value.length >= 8) {
            target.className = "pass";
        } else {
            target.className = "fail";
        }
    }

    addEvent(password,"focus",removeErrorHighlighter);
    addEvent(password,"blur",setErrorHighlighter);
    addEvent(passwordConfirm,"focus",removeErrorHighlighter);
    addEvent(passwordConfirm,"blur",passwordsMatch);

}());