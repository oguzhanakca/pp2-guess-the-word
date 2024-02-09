let sendButton = document.getElementById("send-button");
let feedbackScreen = document.getElementById("contact-form");
let resultScreen = document.getElementById("result-screen");

function eventListeners() {
  sendButton.addEventListener("click", sendEmail);
}
eventListeners();
// Email JS init
(function () {
  emailjs.init("e41jrb0pzCdWwUN-m");
})();

// Send Email
function sendEmail(e) {
  let contactName = document.getElementById("name").value;
  let contactEmail = document.getElementById("email").value;
  let contactMessage = document.getElementById("message").value;
  var templateParams = {
    from_name: contactName,
    from_email: contactEmail,
    message: contactMessage,
  };
  emailjs
    .send("guess_the_word_feedback", "guess_the_word_template", templateParams)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  showThankYouScreen();
  e.preventDefault();
}

function showThankYouScreen() {
  feedbackScreen.style.display = "none";
  resultScreen.style.display = "block";
}
