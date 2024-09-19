const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.submit();
  setTimeout(() => {
    window.location.href = 'account-successfully-created.html';
  }, 1000);
});

