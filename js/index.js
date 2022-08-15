
function validateForm() {

    let name    = document.forms["myFormLogin"]["name"].value;
    let psw     = document.forms["myFormLogin"]["psw"].value;
    emailInput  = document.getElementById("emailInput");
    emailInput.classList.remove("imputError");
    pswInput    = document.getElementById("pswInput");
    pswInput.classList.remove("imputError");
    eMensaje    = document.getElementById ("emailMensaje")
    eMensaje.style.display = "none"
    pswMensaje  = document.getElementById ("pswMensaje")
    pswMensaje.style.display = "none"

    if ((name == "") || (psw == "")) {
        if (name == "") {
            emailInput.classList.add("imputError");
            eMensaje.style.display = "block";
        }
        if (psw == "") {
            pswInput.classList.add("imputError");
            pswMensaje.style.display = "block";
        }
        return false;
    }
}

function onSignIn(googleUser) {
    
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }





