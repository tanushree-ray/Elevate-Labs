const userContainer = document.getElementById("userContainer");
const errorMsg = document.getElementById("errorMsg");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUserData() {
  userContainer.innerHTML = "";
  errorMsg.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("userCard");

        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;

        userContainer.appendChild(userCard);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      errorMsg.textContent = "Failed to load user data. Check your connection.";
    });
}

fetchUserData();

reloadBtn.addEventListener("click", fetchUserData);
