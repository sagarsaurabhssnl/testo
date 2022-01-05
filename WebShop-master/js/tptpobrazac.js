function validateForm(fName) {
  var name = document.forms["form-" + fName]["name-" + fName].value;
  var number = document.forms["form-" + fName]["number-" + fName].value;
  var email = document.forms["form-" + fName]["email-" + fName].value;
  var message = document.forms["form-" + fName]["message-" + fName].value;

  if (name == "" || number == "" || email == "" || message == "") {
    swal("Greška", "Niste ispravno popunili sva polja", "error");
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  else {
    swal("Greška", "Niste ispravno popunili sva polja", "error");
    return false;
  }

  document.forms["form-" + fName]["name-" + fName].value = "";
  document.forms["form-" + fName]["number-" + fName].value = "";
  document.forms["form-" + fName]["email-" + fName].value = "";
  document.forms["form-" + fName]["message-" + fName].value = "";

  swal("Uspjeh", "Vaša poruka je uspješno poslata", "success");
  return false;
}
