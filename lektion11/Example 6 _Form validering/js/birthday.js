(function() {
    let $birth = $("#birthday");
    let $parentsConsent = $("#parents-consent");
    let $consentContainer = $("#consent-container");

    $birth.on("blur change", checkDate);

    function checkDate() {
        let dob = this.value.split("-");
        toggleParentsConsent(new Date(dob[0],dob[1]-1,dob[2]));

    }

    function toggleParentsConsent (date) {
        if(isNaN(date)) return;
        let now = new Date();
        if((now - date) < (1000*60*60*24*365*13)) {
            $consentContainer.removeClass("hide");
            $parentsConsent.focus();
        } else {
            $consentContainer.addClass("hide");
            $parentsConsent.prop("checked",false);
        }

    }

}());