let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   console.log('Info button clicked');
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});



// document.addEventListener("DOMContentLoaded", function() {
//    const showPopupButton = document.getElementById("showPopup");
//    const popup = document.getElementById("popup");
//    const closePopupButton = document.getElementById("closePopup");  // Unique ID for the button
//    const closePopupLink = document.getElementById("closePopupLink");  // Unique ID for the link

//    showPopupButton.addEventListener("click", () => {
//        popup.style.display = "block";
//    });

//    closePopupButton.addEventListener("click", () => {
//        popup.style.display = "none";
//    });

//    closePopupLink.addEventListener("click", () => {
//        popup.style.display = "none";
//        console.log("Working...");
//    });
// });


document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();

   // Create a new FormData object from the form element
   var formData = new FormData(this);

   // Append additional parameters like service ID, template ID, and user ID
   formData.append('service_id', 'service_8k8fw04'); // Replace 'YOUR_SERVICE_ID' with your EmailJS service ID
   formData.append('template_id', 'template_94mm40z'); // Replace 'YOUR_TEMPLATE_ID' with your EmailJS template ID
   formData.append('user_id', 'DrZe2OMffxIVnaBiK'); // Replace 'YOUR_PUBLIC_KEY' with your EmailJS user ID (public key)

   // Send email using EmailJS
   fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData
   })
   .then(function(response) {
      console.log('Email sent successfully:', response);
      // Optionally, display a success message to the user
      alert('Your message has been sent successfully!');
   })
   .catch(function(error) {
      console.error('Email sending failed:', error);
      // Optionally, display an error message to the user
      alert('An error occurred while sending your message. Please try again later.');
   });
});

