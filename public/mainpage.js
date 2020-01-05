const isGood = async() => await fetch('/api/v1/auth/verify');
const userStatus = isGood();


const form = document.createElement('form');
form.innerHTML = `<form>
<label>Full Name</label>
<input type = 'text' name = 'name' id = 'name'>
<label>Birthday</label>
<input type = 'text' name = 'birthday' id = 'birthday'>
<label>Mother's Birthday</label>
<input type = 'text' name = 'mom-bday' id = 'mom-bday'>
<label>Favorite Color</label>
<input type = 'text' name = 'fav-color' id = 'fav-color'>
<label>Father's Birthday</label>
<input type = 'text' name = 'p-bday' id = 'pbday'>
<label>City of Birth</label>
<input type = 'text' name = 'city' id = 'city'>
<label>Pets Name's</label>
<input type = 'text' name = 'pname' id = 'pname'>
<label>Number of Siblings</label>
<input type = 'text' name = 'sib' id = 'sib'>
<button type = 'submit' id = 'submit'>Submit</button>
</form>`;
document.body.appendChild(form);
const button = document.querySelector('button');

button.addEventListener('click', async(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const fullName = formData.get('name');
  const birthday = formData.get('birthday');
  const momBDay = formData.get('mom-bday');
  const dadBDay = formData.get('p-bday');
  const favoriteColor = formData.get('fav-color');
  const birthCity = formData.get('city');
  const numberOfSibilings = formData.get('sib');
  const response = await fetch('/api/v1/date',
    {
      method: 'POST',
      headers: { 'Content-Type' : 'Application/json' },
      body: JSON.stringify({
        fullName,
        birthday,
        momBDay,
        dadBDay,
        favoriteColor,
        birthCity,
        numberOfSibilings
      }),
    });
  const { date } = await response.json();
  console.log(date);
  let death = document.createElement('h1');
  death.textContent = date;
  document.body.prepend(death);
});
