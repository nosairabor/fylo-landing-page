function validateform(){
  var mail = document.getElementById("input-form")
  var regx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (regx.test(mail)){
    return true;
  }
  else{
    document.getElementById("email-checker").innerHTML="Please enter a valid email address."
    return false;
  }
}
