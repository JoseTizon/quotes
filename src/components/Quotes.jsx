import React, {useState} from 'react';
import quotes from "../quotes.json";

const Quotes = () => {

    const random = Math.floor(Math.random() * quotes.length)

    const [quoteNum, setQuoteNum] = useState(random)
    const nextQuote = () => {
        const random = Math.floor(Math.random() * quotes.length)
        setQuoteNum(random)
    }

    const colors = ["#845EC2", "#00C9A7", "#D65DB1", "#4D8076", "#FF9671", "#C34A36", "#3596B5"]
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomColorIndex]

    document.body.style = `background: ${color}`

    return (
        <div style={{color: color}}>
            <p><i className="fa-solid fa-quote-left"></i> {quotes[quoteNum].quote}</p>
            <p>{quotes[quoteNum].author}</p>
            <button onClick={nextQuote} style={{backgroundColor: color}}><i className="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default Quotes;