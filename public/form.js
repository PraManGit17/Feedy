const form = document.querySelector('#form');
const popup = document.querySelector('#success');
const feedback = document.querySelector('#feedback');


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const message = formData.get('message');

  if (!name || !message) {
    alert('Please enter all fields.');
    return;
  }

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    });

    if (response.ok) {
      popup.classList.remove('hidden');
      popup.classList.add('flex');
      

      setTimeout(() => {
        popup.classList.add('hidden');
        popup.classList.remove('flex');
      }, 3000);

      form.reset();
    } else {
      alert('Submission failed. Please try again.');
    }
  } catch (error) {
    alert('An error occurred.');
    console.error(error);
  }
});

feedback.addEventListener('click', () => {
  window.location.href = '/feedback';
});

