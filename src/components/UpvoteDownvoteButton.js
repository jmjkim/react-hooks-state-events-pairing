import React, { useState } from "react";

export default function ContentVoteButton({ upvotes, downvotes }) {
    const [upVote, setUpVote] = useState(upvotes);
    const [downVote, setDownVote] = useState(downvotes);

    function handleUpVote(event) {
        const vote = +event.target.childNodes[0].data;
        setUpVote(vote + 1);
    }

    function handleDownVote(event) {
        const vote = +event.target.childNodes[0].data;
        setDownVote(vote + 1);
    }

    return(
        <div className="Updownvote_btn">
            <button onClick={ (event) => handleUpVote(event) }>{ upVote } Upvotes</button>
            <button onClick={ (event) => handleDownVote(event) }>{ downVote } Downvotes</button>
        </div>
    );
}

