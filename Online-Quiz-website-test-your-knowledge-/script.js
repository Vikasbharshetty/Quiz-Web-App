window.onscroll = function () { myFunction() };
const loggedInUserEmail=null;
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", function () {
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.btnLogin-popup');
const registerLink = document.querySelector('.register-Link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
wrapper.classList.add('active-popup');
wrapper.querySelector('.login').style.transform = 'translateX(-400px)';
wrapper.querySelector('.register').style.transform = 'translateX(0)';
});

loginLink.addEventListener('click', () => {
wrapper.classList.add('active-popup');
wrapper.querySelector('.login').style.transform = 'translateX(0)';
wrapper.querySelector('.register').style.transform = 'translateX(400px)';
});

btnPopup.addEventListener('click', () => {
wrapper.classList.add('active-popup');
wrapper.querySelector('.login').style.transform = 'translateX(0)';
wrapper.querySelector('.register').style.transform = 'translateX(400px)';
});

iconClose.addEventListener('click', () => {
wrapper.classList.remove('active-popup');
});
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle sign-in button click
    document.getElementById('signinbut1').addEventListener('click', async () => {
      const email = document.getElementById('email1').value;
      const password = document.getElementById('password1').value;
      const fullname = document.getElementById('name1').value;

      const response = await fetch('http://localhost:4001/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname,email, password })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        document.getElementById('a1').remove();
        alert('Login successful');
        localStorage.setItem('loggedInUserEmail', data.user.email);
    } else {
        console.log(data);
        alert(data.message || 'Login failed');
    }
    });
  });
  
//  ]
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signinbut').addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:4001/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data);
                alert('Registration successful');
                localStorage.setItem('loggedInUserEmail', data.user.email);
                document.getElementById('a1').remove();
            } else {
                console.log(data);
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        }
    });
});