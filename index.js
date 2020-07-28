document.addEventListener('DOMContentLoaded', () => {
  let template = document.querySelector('#reveal');
  const reveal = template.content.cloneNode(true);
  const av = template.dataset.answer.toLowerCase();

  template.remove();

  const submit = document.querySelector('#answer');
  const btn = document.querySelector('#submitAnswer');

  btn.addEventListener('click', () => {
    if (submit.value.toLowerCase() === av) {
      document.body.append(reveal);
      setTimeout(() => {
        document.querySelector('.modal').classList.add('show');
      }, 100)
    } else {
      if(submit.value.length < av.length) {
        alert('Too short');
      }
      if(submit.value.length > av.length) {
        alert('Too long');
      }
      if(submit.value.length === av.length) {
        alert('Incorrect');
      }
    }
  });
});