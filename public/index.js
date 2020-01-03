const form =  document.querySelector('form');
const button = document.querySelector('button');
button.addEventListener('click', async(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const userName = formData.get('username');
  const password = formData.get('password');
  const response = await fetch('/api/v1//auth/signup',
    {
      method: 'POST',
      headers: { 'Content-Type' : 'Application/json' },
      body: JSON.stringify({
        userName,
        password
      })
    });
  window.location.assign('./mainpage.html');
});
