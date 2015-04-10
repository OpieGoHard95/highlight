function highlightCode(node, keywords) {
  // creates a new function
  var text = node.textContent;
  node.textContent = ""; // Clear the node

  var match, pos = 0;
  // 2 new variables, one looks for a match and second keeps track of the postiton
  while (match = keywords.exec(text)) {
    // goes through the matches
    var before = text.slice(pos, match.index);
    node.appendChild(document.createTextNode(before));
    var strong = document.createElement("strong");
    // creates a new variable with text Strong
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);
    pos = keywords.lastIndex;
    // gives the position last index
  }
  var after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
}

