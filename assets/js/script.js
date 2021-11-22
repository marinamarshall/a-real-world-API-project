// My API key
const API_KEY = "RewmKb--0SB7E0QTShjvTjX9eEs";
// Testing that the key works for GET method
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));

    // Test functionality
    // for(let e of form.entries()) {
    //     console.log(e);
    // }
    const response = await fetch(API_URL, {
                            method: "POST",
                            headers: {
                                "Authorization": API_KEY,
        },
                            body: form,
    })

    let result = document.getElementById("checksform").innerText = response.body;
    
}

async function getStatus(e) {
    // Make get request to API_URL with the API_KEY
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    // Pass this data to a function that will display it
    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

}

function displayStatus(data) {
    let heading = "API Key Status";
    let results = `Your key is valid until\n`
    results += `${data.expiry}`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerText = results;

    resultsModal.show();
}