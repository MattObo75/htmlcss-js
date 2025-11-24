(function() {
    let $bio = $("#bio");
    let $bioCount = $("#bio-count");

    $bio.on("focus", updateCounter);
    $bio.on("keyup", updateCounter);

    $bio.on("blur", function() {
        if ($bioCount.text() >= 0) {
            $bioCount.addClass("hide");        
        }
    });

    function updateCounter(e) {
        let count = 140 - $bio.val().length;
        let status = "";
        if(count < 0) {
            status = "error";
        } else if (count <= 15) {
            status = "warn";
        } else {
            status = "good";
        }

        $bioCount.removeClass("error warn good hide");
        $bioCount.addClass(status);
        $bioCount.text(count);
    }

}());