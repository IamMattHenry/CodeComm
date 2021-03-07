function confirmForm()
{
  var x = document.forms["myForm"] ["username"].value;
  if (x == "")
  {
    alert("The form is not complete, please try again.");
    return false;
  }
  var y = document.forms["myForm"] ["email"].value
  if (y == "")
  {
    alert("The form is not complete, please try again.");
    return false;
  }
}