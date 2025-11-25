//JavaScript validation av subscribtion form
//A. Anonyma funktion som aktiveras med submit
//B. Funktioner kallas för generiska kontroll av fält i section A
//C. Funktioner kallas för custom validation av fält i section A
//D. Hjälp funktioner som hanterar fel meddelande
//E. Hjälp objekt som hanterar kontroll av typ

(function () {
    document.forms.register.noValidate = true;              // Disable HTML5 validation
    //-------------------------------------------------------------------------------
    //   A. Anonyma funktion som aktiveras med submit 
    //-------------------------------------------------------------------------------
    $('form').on('submit', function(e) {                    //När form submittas
        let elements = this.elements;                       //Samling av form controlls (inputs)
        let valid = {};                                     //Custom valid objekt
        let isValid;                                        //isValid: kontrollerar form controll
        let isFormValid;                                    //isFormValid: kontrollera hela formulär
        
        for(let i=0; i<elements.length; i++) {
            isValid = validateRequired(elements[i] && validateTypes(elements[i]));
            if(!isValid) {
                showErrorMessage(elements[i]);
            } else {
                removeErrorMessage(elements[i]);
            }
            valid[elements[i].id] = isValid;
        }

        if(!validateBio()) {
            showErrorMessage(document.getElementById("bio"));
            valid.bio = false;
        } else {
            removeErrorMessage(document.getElementById("bio"));
        }

        if(!validatePassword()) {
            showErrorMessage(document.getElementById("password"));
            valid.password = false;
        } else {
            removeErrorMessage(document.getElementById("password"));
        }

        if(!validateParentsConsent()) {
            showErrorMessage(document.getElementById("parents-consent"));
            valid.ParentsConsent = false;
        } else {
            removeErrorMessage(document.getElementById("parents-consent"));
        }

        

        for(let field in valid) {
            if(!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }

        if(!isFormValid) {
            e.preventDefault();
        }


    });    
    

    //-------------------------------------------------------------------------------
    //   B. Funktioner kallas för generiska kontroll av fält i section A
    //-------------------------------------------------------------------------------
    function validateRequired(el) {
        if(isRequired(el)) {
            let valid = !isEmpty(el);
            if(!valid) {
                setErrorMessage(el,"Field is required!");
            } 
            return valid;
        }
        return true;
    }
    
    function isRequired(el) {
        return((typeof el.required === "boolean") && el.required) ||
            (typeof el.required === "string"); 
    }
    function isEmpty(el) {
        return !el.value || el.value === el.placeholder;
    }
    function validateTypes(el) {
        if(!el.value) return true;

        let type = $(el).data("type") || el.getAttribute("type");
        if(typeof validateType[type] === "function") {
            return validateType[type](el);
        } else {
            return true;
        }
    }

    //-------------------------------------------------------------------------------
    //   C. Funktioner kallas för custom validation av fält i section A
    //-------------------------------------------------------------------------------
    function validateParentsConsent() {
        let parentsConsent = document.getElementById("parents-consent");
        let consentContainer = document.getElementById("consent-container"):
        let valid = true;

        if(consentContainer.className.indexOf("hide") === -1) {
            valid = parentsConsent.checked;
            if(!valid) {
                setErrorMessage(parentsConsent, "You need your parent's consent!");        
            }
        }

        return valid;
    }

    function validateBio() {
        let bio = document.getElementById("bio");
        let valid = bio.value.length <= 140;
        if(!valid) {
                setErrorMessage(bio, "Please make sure your bio doesnt exceed 140 caracters!");        
        }
        return valid;
    }

    function validatePassword() {
        let password = document.getElementById("password");
        let valid = password.value.length >= 8;
        if(!valid) {
                setErrorMessage(password, "Your password needs to have atleast 8 caracters!");        
        }
        return valid;
    }
    //-------------------------------------------------------------------------------
    //   D. Hjälp funktioner som hanterar fel meddelande
    //-------------------------------------------------------------------------------
   function setErrorMessage(el) {
        $(el).data("errorMessage", message);         
   }
   function getErrorMessage() {
        return $(el).data("errorMessage") || el.title;
   }

   function showErrorMessage(el) {
        let $el = $(el);
        let errorContainer = $el.siblings(".error.message");
        if(!errorContainer.length) {
            errorContainer = $('<span class="error message"></span>').insertAfter($el);
        }
        errorContainer.text(getErrorMessage(el));
   }
   function removeErrorMessage(el) {
        let errorContainer = $el.siblings(".error.message");
        errorContainer.remove();
   }
    //-------------------------------------------------------------------------------
    //   E. Hjälp objekt som hanterar kontroll av typ
    //-------------------------------------------------------------------------------
    let validateType = {
        email: function(el) {
            let valid = /[^@]+@[^@]+/.test(el.value);
            if(!valid) {
                setErrorMessage(el, "Please enter a valid email!");
            }
            return valid;
        },
        number: function(el) {
            let valid = /^\d+$/.test(el.value);
            if(!valid) {
                setErrorMessage(el, "Please enter a valid number!");
            }
            return valid;
        },
        date: function(el) {
            let valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
             if(!valid) {
                setErrorMessage(el, "Please enter a valid date!");
            }
            return valid;
        }
    };

}());