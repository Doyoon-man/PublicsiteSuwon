const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:\\Users\\308\\.mcp-figma\\cache\\file_nodes_TnI7vlagHnI2Fm4nAvMDgr_1778649299489.json', 'utf8'));
const texts = [];
function traverse(node) {
  if (node.characters) texts.push(node.characters);
  if (node.children) node.children.forEach(traverse);
}
traverse(data.nodes['281:2983'].document);
console.log(texts);
