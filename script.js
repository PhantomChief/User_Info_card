// Get the button using getElementById
const showButton = document.getElementById("showInfo");

// Get the output area
const output = document.getElementById("output");

// Run the code when the button is clicked
showButton.addEventListener("click", function () {
  // Get values using getElementById
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const favoriteColor = document.getElementById("favoriteColor").value;

  // Get values using querySelector
  const birthday = document.querySelector("#birthday").value;

  const phone = document.querySelector("#phone").value;

  const address = document.querySelector("#address").value;

  const course = document.querySelector("#course").value;

  const hobby = document.querySelector("#hobby").value;

  // Find the selected gender
  const selectedGender = document.querySelector('input[name="gender"]:checked');

  let gender;

  if (selectedGender != null) {
    gender = selectedGender.value;
  } else {
    gender = "Not selected";
  }

  // getElementsByClassName
  // Gets all elements with the form-group class
  const formRows = document.getElementsByClassName("form-row");

  console.log("Number of form rows: " + formRows.length);

  // querySelectorAll
  // Gets all input elements
  const allInputs = document.querySelectorAll("input");

  console.log("Number of input elements: " + allInputs.length);

  // Display the information
  output.innerHTML = `

        <p class="info-item">
            <strong>Full Name:</strong>
            <span>${fullName}</span>
        </p>

        <p class="info-item">
            <strong>Email:</strong>
            <span>${email}</span>
        </p>

        <p class="info-item">
            <strong>Age:</strong>
            <span>${age}</span>
        </p>

        <p class="info-item">
            <strong>Birthday:</strong>
            <span>${birthday}</span>
        </p>

        <p class="info-item">
            <strong>Phone:</strong>
            <span>${phone}</span>
        </p>

        <p class="info-item">
            <strong>Address:</strong>
            <span>${address}</span>
        </p>

        <p class="info-item">
            <strong>Course:</strong>
            <span>${course}</span>
        </p>

        <p class="info-item">
            <strong>Hobby:</strong>
            <span>${hobby}</span>
        </p>

        <p class="info-item">
            <strong>Favorite Color:</strong>
            <span>${favoriteColor}</span>
        </p>

        <p class="info-item">
            <strong>Gender:</strong>
            <span>${gender}</span>
        </p>

    `;
});
