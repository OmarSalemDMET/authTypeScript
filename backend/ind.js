async function getD(){
    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json', // Set Content-Type header
            },
            body: JSON.stringify({
                name: "omar",
                email: "omar2@Json.web",
                password: "HiPal",
            }) // Collect form data
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text(); // Read response as text
        console.log(data);
    } catch (error) {
        console.error('Error:', error); // Log the error
    }
}

getD();
