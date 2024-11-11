const TagFilter = ({ tags, selectedTag, onTagClick }) => {
  return (
    <div className="tag-filter">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`filter-button ${selectedTag === tag ? "active" : ""}`}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
