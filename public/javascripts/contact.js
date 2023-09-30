// contact.js | Dylan | 301294233 | 09/30/2023
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    // This can be usefull for sending it back to the server through a post request
    var jsonData = {};

    // For each key-value pair in the form data, assigns the key-value in the JSON object.
    formData.forEach(function (value, key) {
      jsonData[key] = value;
    });

    // Prints the data
    console.log(jsonData);

    // And redirects to index
    window.location.href = "/";
  });
