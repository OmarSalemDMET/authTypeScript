import axios  from "axios";

function EntNew(){
    const handlePost = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/Login', {
                method: 'POST', // Specify the HTTP method
                headers: {
                    'Content-Type': 'application/json', // Set Content-Type header
                },
                body: JSON.stringify({
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

    const handlelogOut = async () => {
        const response  = await axios.post('http://localhost:3000/api/logout',
            {
                email: "omar2@Json.web",
                password: "HiPal",
            },
            {headers: {
                'Content-Type': 'application/json', // Set Content-Type header
            }}
        ).then(response => console.log(JSON.stringify(response.data))).catch(error => console.log("there was an error"))
    }

    return(
        <>
        <button onClick={handlePost}>Login</button>
        <button onClick={handlelogOut}>logout</button>
        </>
    )
}

export default EntNew;