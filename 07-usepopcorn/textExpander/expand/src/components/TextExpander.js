import { useState } from "react";

export default function TextExpander({
  expanded = false,
  collaspedNumWords = 10,
  expandButtonText = "Show more",
  collaspedButtonText = "Show less",
  buttonColor = "",
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  function handleExpand() {
    setIsExpanded(!isExpanded);
  }
  const displayText = isExpanded ? children : "test";
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button color={buttonColor} onClick={handleExpand}>
        {isExpanded ? collaspedButtonText : expandButtonText}
      </button>
    </div>
  );
}
