import React from "react";
import './TagsLogement.css';

const TagsLogement = ({ tags }) => {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsLogement