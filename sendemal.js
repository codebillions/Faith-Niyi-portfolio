// email sender 
function sendMail() {
    let parms = {
      name : document.getElementById( "name" ).value,
      email : document.getElementById( "email" ).value,
      business : document.getElementById( "business" ).value,
      select : document.getElementById( "select" ).value,
      budget : document.getElementById( "budget" ).value,
      add : document.getElementById( "add" ).value,
    }
  
    emailjs.send("service_w98g14m","template_bjk0oms",parms).then(alert("Email Sent !!"))
  }
  
