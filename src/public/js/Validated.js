function Validated() {
    'use strict';
    window.addEventListener('load', () => {
      let forms = document.getElementsByClassName('needs-validation');
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
          console.log("eri gei?")
        }, false);
      });
    }, false);
  };
  Validated();