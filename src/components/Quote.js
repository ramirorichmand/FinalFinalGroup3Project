import { useEffect } from "react"

const Quote = () => {
    useEffect(() => {


    // call updateQuote once when page loads
    updateQuote();

    }, []) 

    async function updateQuote() {
        // DOM elements
        const button = document.querySelector("button");
        const quote = document.querySelector("blockquote p");
        const cite = document.querySelector("blockquote cite");
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
          // Update DOM elements
          quote.textContent = data.content;
          cite.textContent = data.author;
        } else {
          quote.textContent = "An error occured";
          console.log(data);
        }
      }

    return (
        <div className="quote-container">
        <div>
            <blockquote className="blockquote mb-0">
                <p>loading...</p>
                <footer className="blockquote-footer">
                    <cite title="Source Title"></cite>
                </footer>
            </blockquote>
        </div>
        {/* <div className="card-footer">
            <button className="btn btn-primary" onClick={updateQuote}>New Quote </button>
        </div>  */}
        </div>
    )
}
export default Quote