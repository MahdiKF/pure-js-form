const validateForm = (form) => {
  const myForm = document.querySelector(form);

  const validationRules = [
    {
      attribute : 'required',
      isValid : input => input.value.trim() !== '',
      errorMessage : (input , label) => `${label.textContent} is required`
    }
  ];

  const validateSingleFormGroup = (node) =>{

    

    const label = node.querySelector('label')
    const input = node.querySelector('input')
    const errorCountainer = node.querySelector('.error')
   
    
    for (const rule of validationRules){

      if(input.hasAttribute(rule.attribute) && !rule.isValid (input)){

          errorCountainer.textContent = rule.errorMessage(input, label)

      }
    }


    
  }



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
