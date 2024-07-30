function sendMail() {
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    // send to emailJS server
    emailjs.send("service_5n6lzws", "template_avejjvk", params).then(confirm("Email has been sent"))
}