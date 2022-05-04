import React, { useState } from "react";
import Comments from "./Comments";
import SearchBar from "./SearchBar";

export default function DisplayComments({ comments }) {
    const [toggled, setToggled] = useState(false);
    const [searchBy, setSearchBy] = useState("");

    function handleInputChange(event) {
        setSearchBy(event.target.value);
    }

    const searchByName = comments.filter(comment => comment.user.toLowerCase() === searchBy.toLowerCase() ? console.log(`Matching user: ${comment.user}`) : true);
 
    return (
        <div className="Toggle_comments_btn">
            <button onClick={ () => setToggled(!toggled) }>{ toggled ? "Hide Comments" : "Show Comments" }</button>
            <SearchBar comments={ comments } handleInputChange={handleInputChange} />
            <Comments comments={ searchByName } toggled={ toggled } />
        </div>
    );
}
