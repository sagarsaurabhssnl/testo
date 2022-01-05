function subscribe() {
  var email = document.forms["subform"]["subinput"].value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  else {
    swal("Greška", "Unesena email adresa ne postoji", "error");
    return false;
  }

  document.forms["subform"]["subinput"].value = "";

  swal("Uspjeh", "Uspješno ste se pretplatili", "success");
  return false;
}
