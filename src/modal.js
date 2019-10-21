const login = document.querySelectorAll(".login");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close");
const content_text = document.querySelector(".modal-content .content> h3");
const content_logo = document.querySelector(".modal-content .content img");
const back = document.querySelector("form .submit a");

function modal_id(id) {
  switch (id) {
    case "facebook":
      content_logo.src = "./img/facebook-logo-circle-transparent.png";
      content_text.innerHTML = "Vincular página do Facebook";
      break;
    case "twitter":
      content_logo.src = "./img/twitter-logo.png";
      content_text.innerHTML = "Vincular conta do Twitter";
      break;
    case "instgram":
      content_logo.src = "./img/instagram-logo.png";
      content_text.innerHTML = "Vincular conta do Instagram";
      break;
    case "google_meu_negocio":
      content_logo.src = "./img/google-my-business-logo.png";
      content_text.innerHTML = "Vincular ficha do Google Meu Negócio";
      break;
    case "pinterest":
      content_logo.src = "./img/pinterest-logo.png";
      content_text.innerHTML = "Vincular conta do Pinterest";
      break;
    case "linkedin":
      content_logo.src = "./img/linkedin-logo.png";
      content_text.innerHTML = " Vincular página do Linkedin";
      break;
    case "youtube":
      content_logo.src = "./img/youtube-logo.png";
      content_text.innerHTML = " Vincular conta do You Tube";
      break;
    case "whatsapp":
      content_logo.src = "./img/whatsapp-logo.png";
      content_text.innerHTML = "Vincular número do WhatsApp";
      break;
    case "google_analytics":
      content_logo.src = "./img/google-analytics-logo.svg";
      content_text.innerHTML = "Vincular conta do Google Analytics";
      break;
  }

  modal.style.display = "block";
}

login.forEach(function(login) {
  login.addEventListener("click", function() {
    var loginId = this.getAttribute("id");
    modal_id(loginId);
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

back.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
