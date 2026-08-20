const validateForm = (form) => {
  const myForm = document.querySelector(form);

  const validationRules = [
    {
      attribute: "required",
      isValid: (input) => input.value.trim() !== "",
      errorMessage: (input, label) => `${label.textContent} is required`,
    },
    {
      attribute: "minLength",
      isValid: (input) =>
        input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: (input, label) =>
        `${label.textContent} needs to be at least ${parseInt(input.minLength, 10)}`,
    },
    {
      attribute: "customMaxlength",
      isValid: (input) =>
        input.value && input.value.length <= parseInt(input.getAttribute('customMaxlength'), 10),
      errorMessage: (input, label) =>
        `${label.textContent} needs to be less than ${parseInt(input.getAttribute('customMaxlength'), 10)} Characters`,
    },
  ];

  const validateSingleFormGroup = (node) => {
    const label = node.querySelector("label");
    const input = node.querySelector("input");
    const errorCountainer = node.querySelector(".error");

    let formGroupError = false;

    for (const rule of validationRules) {
      if (input.hasAttribute(rule.attribute) && !rule.isValid(input)) {
        errorCountainer.textContent = rule.errorMessage(input, label);
        input.classList.add(
          "border",
          "border-red-700",
          "border-2",
          "bg-red-50",
        );
        return;
        formGroupError = true;
      }
    }

    if (!formGroupError) {
      errorCountainer.textContent = "";
      input.classList.remove(
        "border",
        "border-red-700",
        "border-2",
        "bg-red-50",
      );
    }
  };

  myForm.setAttribute("novalidate", "");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    validateAllFormGroup(myForm);
  });

  function validateAllFormGroup(formToValidate) {
    const formGroups = Array.from(
      formToValidate.querySelectorAll(".form-group"),
    );

    formGroups.forEach((node) => {
      validateSingleFormGroup(node);
    });
  }
};

validateForm("#registerForm");
