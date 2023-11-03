const fs = require('fs');
const path = require('path');

// Define the replacements
const replacements = [
  {
    search: /get ColorPropType\(\): \$FlowFixMe \{([\s\S]*?)\},/,
    replace: 'get ColorPropType(): $FlowFixMe {\n  return require(\'deprecated-react-native-prop-types\').ColorPropType;\n},',
  },
  {
    search: /get EdgeInsetsPropType\(\): \$FlowFixMe \{([\s\S]*?)\},/,
    replace: 'get EdgeInsetsPropType(): $FlowFixMe {\n  return require(\'deprecated-react-native-prop-types\').EdgeInsetsPropType;\n},',
  },
  {
    search: /get PointPropType\(\): \$FlowFixMe \{([\s\S]*?)\},/,
    replace: 'get PointPropType(): $FlowFixMe {\n  return require(\'deprecated-react-native-prop-types\').PointPropType;\n},',
  },
  {
    search: /get ViewPropTypes\(\): \$FlowFixMe \{([\s\S]*?)\},/,
    replace: 'get ViewPropTypes(): $FlowFixMe {\n  return require(\'deprecated-react-native-prop-types\').ViewPropTypes;\n},',
  },
];

// Specify the path to the react-native/index.js file
const indexPath = path.join('node_modules', 'react-native', 'index.js');

// Read the file contents
const data = fs.readFileSync(indexPath, 'utf8');

// Apply the replacements
let modifiedData = data;
replacements.forEach(({ search, replace }) => {
  modifiedData = modifiedData.replace(search, replace);
});

// Write the modified data back to the file
fs.writeFileSync(indexPath, modifiedData, 'utf8');

console.log('Replacements completed successfully.');
