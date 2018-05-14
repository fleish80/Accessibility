function toggleSubmitButton(radio) {
    const btnSbtElm = document.getElementById('btn-sbmt');
    if (radio.checked) {
        btnSbtElm.removeAttribute('disabled');
    } else {
        btnSbtElm.setAttribute('disabled', '');
    }
}

function onSubmit(event) {
    event.preventDefault();
    const agreementElm = document.getElementById('agreement');
    const clientErrElm = document.getElementById('client-error');
    if (agreementElm.checked) {
        clientErrElm.style.display = 'none';
    }
    else {
        clientErrElm.style.display = 'block';
    }
}

function add(num) {
    const stepperElm = document.getElementById('stepper');
    const btnPlusElm = document.getElementById('btn-plus');

    stepperElm.value = parseInt(stepperElm.value) + parseInt(num);
    if (stepperElm.value === "5") {
        btnPlusElm.setAttribute('disabled', '');
    }
    else {
        btnPlusElm.removeAttribute('disabled');
    }
}
