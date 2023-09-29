const dataDiv = document.querySelector('.form-result');
const sampleForm = document.querySelector('.sample-form');

sampleForm.addEventListener('submit', e => {
  e.preventDefault();
  let object = {};
  let formData = new FormData(sampleForm);
  formData.forEach(function(value, key){
        object[key] = value;
    });
  let json = JSON.stringify(object);
  dataDiv.innerHTML = `${json}`;

  const params = new URLSearchParams(formData.entries()).toString();
  const url = '/?' + params;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    if (xhr.status !== 200) {
      return;
    }
    alert('Данные отправлены!')
  }
  xhr.send();
})
