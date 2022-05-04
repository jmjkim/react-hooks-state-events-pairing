import React from "react";

export default function ContentDetail({ title, views, createdAt }) {
    return (
        <div className="Content_detail">
            <h1>{ title }</h1>
            <p>{ views } Views | Uploaded { createdAt }</p>
        </div>
    );
}
