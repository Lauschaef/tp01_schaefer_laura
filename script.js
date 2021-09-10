(function () {

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if ($("#password").val() != $("#passwordConfirmation").val()){
          $("#confirmPassword").show();
        } else {
          $("#confirmPassword").hide();
        }

        if (!form.checkValidity() || ($("#password").val() != $("#passwordConfirmation").val())) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert("Le formulaire a bien été envoyé !");
        }
        form.classList.add('was-validated')
      }, false)
      
    })
})()