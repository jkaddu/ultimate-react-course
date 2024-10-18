import { useState } from "react";

export default function TextExpander({
  expanded = false,
  collaspedNumWords = 10,
  expandButtonText = "Show more",
  collaspedButtonText = "Show less",
  buttonColor = "blue",
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collaspedNumWords).join(" ") + "...";

  const buttonStyle = {
    backGround: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    color: buttonColor,
    marginLeft: "4px",
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={handleExpand}>
        {isExpanded ? collaspedButtonText : expandButtonText}
      </button>
    </div>
  );
}
