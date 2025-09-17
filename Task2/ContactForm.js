const form=document.getElementById('form');
form.addEventListener("submit", function(e){
    e.preventDefault();

    let isValid=true;

            let name=document.getElementById('full-name').value.trim();
            let email=document.getElementById("email").value.trim();
            let subject=document.getElementById("subject").value.trim();
            let message=document.getElementById("message").value.trim();

            document.getElementById("nameError").innerText = "";
            document.getElementById("emailError").innerText = "";
            document.getElementById("subjectError").innerText = "";
            document.getElementById("messageError").innerText = "";

         if(name.length<3){
                document.getElementById("nameError").innerHTML="Full name must be at leat 3 characters.";
                isValid=false;
            }

            //if no @ or . found then the email is not valid
            if(email.indexOf("@") === -1 || email.indexOf(".") === -1){
                document.getElementById("emailError").innerText = "Please enter a valid email.";
            } else {
                document.getElementById("emailError").innerText = "";
            }

            if(subject === ""){
                document.getElementById("subjectError").innerText = "Subject cannot be empty.";
                isValid = false;
            }

             if(message.length!=0 && message.length < 10){
                document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
                isValid = false;
            }

            if(isValid){
                alert("Form submitted successfully!");
                document.getElementById("form").reset();
            }
        })
    
