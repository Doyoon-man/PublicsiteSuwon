const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:\\Users\\308\\.mcp-figma\\cache\\file_nodes_TnI7vlagHnI2Fm4nAvMDgr_1778649299489.json', 'utf8'));

function traverse(node, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}${node.name} (${node.type})`);
  if (node.children) {
    node.children.forEach(child => traverse(child, depth + 1));
  }
}

traverse(data.nodes['281:2983'].document);
