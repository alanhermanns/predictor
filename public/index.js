const form =  document.querySelector('form');
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener('click', async(event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userName = formData.get('username');
    const password = formData.get('password');
    let response;
    if(button.name === 'signup'){
      response = await fetch('/api/v1/auth/signup',
        {
          method: 'POST',
          headers: { 'Content-Type' : 'Application/json' },
          body: JSON.stringify({
            userName,
            password
          })
        })
        .then(response =>{
          console.log(response);
          if(response.status === 200){
            window.location.assign('./mainpage.html');
          }
          else if(response.status !== 200){
            const header = document.createElement('h3');
            header.innerHTML = 'Sign Yourself Up / Log Yourself In, so Death Knows You\'re Coming';
            document.body.prepend(header);
          }
        });
    }
    else if(button.name === 'login'){
      response = await fetch('/api/v1/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type' : 'Application/json' },
          body: JSON.stringify({
            userName,
            password
          })
        })
        .then(response =>{
          console.log(response);
          if(response.status === 200){
            window.location.assign('./mainpage.html');  
          }
          else if(response.status !== 200){
            const header = document.createElement('h3');
            header.innerHTML = 'Sign Yourself Up If You Haven\'t Already / Log Yourself In, so Death Knows You\'re Coming';
            document.body.prepend(header);
          }
        });
    }
  });
});
