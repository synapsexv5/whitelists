function checkPassword() {
  const correctPassword = "password1234";
  const password = prompt("Enter your password:");
  
  if (password === correctPassword) {
    console.log("Access granted!");
  } else {
    console.log("Incorrect password. Access denied.");
  }
}
