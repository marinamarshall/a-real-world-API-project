// My API key
const API_KEY = "RewmKb--0SB7E0QTShjvTjX9eEs";
// Testing that the key works for GET method
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));


async function getStatus(e) {
    // Make get request to API_URL with the API_KEY
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    // Pass this data to a function that will display it
    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }

}


