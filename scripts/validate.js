function validate(form)
{
    var form = document.getElementsByTagName('form')[0];
    
    var Fname = document.getElementById("Fname").value;
    
    //fails if blank
    if(form.Fname.value == "")
    {
        alert("Error: name is empty");
        form.Fname.focus();
        return false;
    }
    
    if(form.Lname.value == "")
    {
        alert("Error: name is empty");
        form.Lname.focus();
        return false;
    }

    if(form.Email.value == "")
    {
        alert("Error: email is empty");
        form.Email.focus();
        return false;      
    }

    //alphanumeric chars only
    var regexName = /^[\w ]+$/;

    if(!regexName.test(form.Fname.value))
    {
        alert("Error: name contains non-alphanumeric characters");
        form.Fname.focus();
        return false;           
    }

    var regexEmail = /.+@.+/;

    if(!regexEmail.test(form.Email.value))
    {
        alert("Error: email formatted incorrectly, needs an '@' symbol in the middle");
        form.Email.focus();
        return false;           
    }

    //successfully validated
    return true;
}