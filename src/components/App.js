import React, { useState } from "react";
import video from "../data/video.js";
import ContentDetail from "./ContentDetail.js";
import ContentVoteButton from "./UpvoteDownvoteButton.js";
import DisplayComments from "./DisplayComments.js";

export default function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <ContentDetail title={ video.title } views={ video.views } createdAt={ video.createdAt } />
      <ContentVoteButton upvotes={ video.upvotes } downvotes={ video.downvotes } />
      <DisplayComments comments={ video.comments }/>
    </div>

    );
}
