import React, { useState } from "react";

export default function Comments({ comments, toggled }) {
    const commentsWithVotes = comments.map(comment => Object.assign(comment, {upVotes: 0, downVotes: 0}));
    const [arrayOfComments, setArrayOfComments] = useState(commentsWithVotes);

    function handleUpVote(event) {
        const newUpVote = arrayOfComments.map(comment => (comment.id === +event.target.id) ? {...comment, upVotes: comment.upVotes + 1} : comment);
        setArrayOfComments(newUpVote);
    }

    function handleDownVote(event) {
        const newDownVote = arrayOfComments.map(comment => (comment.id === +event.target.id) ? {...comment, downVotes: comment.downVotes + 1} : comment);
        setArrayOfComments(newDownVote);
    }

    function handleDeleteComment(event) {
        const newComments = arrayOfComments.filter(comment => comment.id !== +event.target.id);
        setArrayOfComments(newComments);
    }

    return (
        <div className="Comment_detail">
            <h2>{ arrayOfComments.length } Comments</h2>
            { toggled ? arrayOfComments.map(comment => {
                return (
                <div key={ comment.id } className="Comment_section">
                    <h4>{ comment.user }</h4>
                    <p>{ comment.comment }</p>
                    <div className="Updownvote_btn">
                        <button id={ comment.id } onClick={ (event) => handleUpVote(event) }>{ comment.upVotes } Upvotes</button>
                        <button id={ comment.id } onClick={ (event) => handleDownVote(event) }>{ comment.downVotes } Downvotes</button>
                        <button id={ comment.id } onClick={ (event) => handleDeleteComment(event) }>Delete Comment</button>
                    </div>
                </div>
            );
        }) : null }
        </div>
    );
}