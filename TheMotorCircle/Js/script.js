//Animation du burger au click
const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});

//Mail de contact en AJAX
  $('form').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
              type: 'post',
              url: 'mail.php',
              data: $('form').serialize(),
              success: function () {
                alert('E-mail bien reçu, nous vous recontacterons rapidement !');
                window.location.replace("index.html");
              }
            });
  });
