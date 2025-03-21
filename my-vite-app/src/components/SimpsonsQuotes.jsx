import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard";

const QuotesUrl = "https://thesimpsonsquoteapi.glitch.me/quotes?count=3";

function SimpsonsQuotes() {
    const [quotes, setQuotes] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(QuotesUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            const data = await response.json();
            setQuotes(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div>
                    {quotes.map((quote, index) => (
                        <QuoteCard key={index} {...quote} />
                    ))}
                </div>
            </div>
            <button onClick={getData}>
                Get Random Quotes
            </button>
        </div>
    );
}

export default SimpsonsQuotes;
