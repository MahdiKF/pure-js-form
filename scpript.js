const validateForm = (form) => {
  const myForm = document.querySelector(form);
  myForm.setAttribute("novalidate", "");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    validateAllFormGroup(myForm);
  });

  function validateAllFormGroup(formToValidate) {
    const formGroups = Array.from(
      formToValidate.querySelectorAll(".form-group"),
    );

    formGroups.forEach(node => {
        validateSingleFormGroup(node)
    });

  }
};

validateForm("#registerForm");
