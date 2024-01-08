const { config } = require('../util');
const axios = require('axios');

const getTerritoryData = async () => {
  const { data } = await axios.get(config.TERRITORY_DATA_URL);

  const buildHierarchy = (root, parentId = null) => {
    const children = root.filter((item) => item.parent === parentId);

    if (children.length === 0) {
      return null;
    }

    const tree = children.map((child) => {
      const subtree = buildHierarchy(root, child.id);
      if (subtree) {
        return { ...child, children: subtree };
      }
      return { ...child };
    });

    return tree;
  };

  const generateHierarchy = (data) => {
    const rootNodes = data.filter((item) => !item.parent);
    const hierarchicalData = rootNodes.map((root) => {
      const subtree = buildHierarchy(data, root.id);
      return { ...root, children: subtree };
    });

    return hierarchicalData;
  };

  return generateHierarchy(data.data);
};

module.exports = { getTerritoryData };
