let url = 'https://api.api-ninjas.com/v1/quotes' ; // New APIt

async function getQuote() {
    try {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        let data = await res.json();
        console.log("Quote:", data.content, "\n- ", data.author);
        return data;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

getQuote();

// let heading = document.querySelector("#h11");
// heading.innerHTML = getQuote();