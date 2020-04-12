var feedback_button = document.querySelector(".contacts-btn");
var popup = document.querySelector(".popup");
var popup_close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var name_field = document.querySelector("[name=name]");
var email_field = document.querySelector("[name=e-mail]");
var message_field = document.querySelector("[name=message]");

var isStorageSupport = true;
var storage= "";

try {
  storage = localStorage.getItem("name_field");
} catch (err) {
  isStorageSupport = false;
}

feedback_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  if (storage) {
    name_field.value = storage;
    email_field.focus();
  } else {
    name_field.focus();
  }
});

popup_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function(evt) {
  if (!name_field.value || !email_field.value || !message_field.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");  
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name_field", name_field.value );
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode==27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
}
)
