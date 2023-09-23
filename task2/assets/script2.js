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

    const requestURL = `./?num1=${object.num1}&num2=${object.num2}&num3=${object.num3}&num4=${object.num4}&num5=${object.num5}&text1=${object.text1}&text2=${object.text2}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.log(xhr.responseText);
        return;
      }
      alert('Данные отправлены!')
    }
    xhr.send();
})
