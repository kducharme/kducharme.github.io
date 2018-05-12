const headerManager = require('./interface/headerManager');
const experienceManager = require('./interface/experienceManager');
const navManager = require('./interface/navManager');

headerManager.createStructure();
headerManager.navigateTabs();

experienceManager.experienceBlock();