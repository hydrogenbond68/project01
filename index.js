// Select all the 'View' buttons
const viewButtons = document.querySelectorAll(".viewBtn");
// Get the modal and its components
const modal = document.getElementById("applianceModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const closeModal = document.querySelector(".close");

// Loop through each 'View' button
viewButtons.forEach(button => {
  // Add a click event listener to each button
  button.addEventListener("click", function() {
    // Remove any existing 'clicked' class from other buttons
    viewButtons.forEach(btn => {
      btn.classList.remove("clicked");
    });
    // Add 'clicked' class to the clicked button
    this.classList.add("clicked");

    // Get the parent container (appliance) of the clicked button
    const appliance = this.parentNode;
    // Get the image source, title, description, and features of the clicked appliance
    const imageSrc = appliance.querySelector("img").src;
    const title = appliance.querySelector("h3").textContent;
    const description = appliance.querySelector("p").textContent;
    const features = appliance.querySelectorAll("li");

    // Set the modal content to match the clicked appliance
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Clear previous features
    modalFeatures.innerHTML = "";
    // Add current features to the modal
    features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature.textContent;
      modalFeatures.appendChild(li);
    });

    // Display the modal
    modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
