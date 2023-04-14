(() => {
  const form = document.querySelector('.js-speaker-form');

  form.addEventListener('submit', submitForm);

  function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const tel = document.getElementById('tel');
    const email = document.getElementById('email');
    const roles = document.getElementsByClassName('information-role');
    const language = document.getElementsByName('role_programmist');
    const audio = new Audio('../images/kapibara.mp3');

    console.log(`name: ${name.value}`);
    console.log(`tel: ${tel.value}`);
    console.log(`email: ${email.value}`);
    console.log(`Lang:`);
    for (let i = 0; i < language.length; i++) {
      if (language[i].checked) {
        console.log(`      ${language[i].value}`);
      }
    }

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].checked) {
        console.log(`role: ${roles[i].value}`);
      }
    }

    if (name.value === 'Капибара') {
      const body = document.getElementsByTagName('body')[0];
      audio.play();
      const img = document.createElement('img');
      img.setAttribute(
        `src`,
        'https://www.meme-arsenal.com/memes/392cebf2001f32292d1373132c124f48.jpg'
      );
      img.classList.add('rotate-animation');
      body.appendChild(img);

      body.style.transition = 'all 1s linear';
      body.style.transform = 'rotate(180deg)';

      img.style.position = 'fixed';
      img.style.top = '70%';
      img.style.left = '25%';
      img.style.transform = 'translate(-50%, -50%) rotate(-180deg)';
      img.style.width = '900px';
      img.style.height = '900px';
      img.style.borderRadius = '50%';

      img.addEventListener('click', () => {
        audio.pause();
        body.style.transform = 'rotate(0deg)';
        img.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        setTimeout(() => {
          img.remove();
        }, 1000);
      });
    }
  }
})();
