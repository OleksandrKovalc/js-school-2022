const numberInputRef = document.querySelector('input[name="number"]');

const powerInputRef = document.querySelector('input[name="power"]');

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function() {
    сonsole.log('numberInputRef.value:', numberInputRef.value);
    сonsole.log('powerInputRef.value:', powerInputRef.value);

    const number = Number(numberInputRef.value);
    const power = Number(powerInputRef.value);

    const result = Math.pow(number, power);
    console.log(result);
});
