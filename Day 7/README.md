# Fetch User Data Using JavaScript Fetch API

This project demonstrates how to fetch and display user data from a public API using the JavaScript Fetch API.

## Files Included

- `index.html` – Main HTML structure and container for user data
- `style.css` – Styling for user cards, layout, and error messages
- `script.js` – Fetch API implementation to get and display user info

## How It Works

1. `index.html` contains a button and an empty container for displaying users.
2. When the page loads or the reload button is clicked:
   - A fetch request is sent to: `https://jsonplaceholder.typicode.com/users`
   - The response is parsed as JSON
   - Each user's name, email, and address is displayed inside a styled card
3. If there’s a network error, an error message is shown.

## Preview

Preview of user data displayed after fetching from JSONPlaceholder API
![Screenshot 2025-07-03 203009](https://github.com/user-attachments/assets/dc8ba08b-6369-4f88-b861-060fe9db3184)


Error Handling Preview: Message shown when fetch fails due to no internet connection
![Screenshot 2025-07-03 202912](https://github.com/user-attachments/assets/287423af-0791-4175-821b-0b60c930f5e2)


## API Reference

- [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)
