const inputs = document.querySelectorAll('.controls input');

function changeHandler() {
  let suffix = this.dataset.sizing || '';
  console.log(this.name);
  console.log(this.value);

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', changeHandler));
inputs.forEach(input => input.addEventListener('mousemove', changeHandler))
