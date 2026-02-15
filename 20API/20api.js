//                              API

async function fetchData() {
    // 1. Send the request and wait for the response
    const response = await fetch('https://api.example.com/data');
    
    // 2. Convert the response into usable JSON format
    const data = await response.json();
    
    // 3. Use the data
    console.log(data);
}
fetchData();
