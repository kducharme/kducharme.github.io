const headerManager = require('./interface/headerManager');
const experienceManager = require('./interface/experienceManager');
const navManager = require('./interface/navManager');
const modalManager = require('./modal/modalManager');

modalManager.mWarning();
headerManager.createStructure();
headerManager.navigateTabs();
experienceManager.experienceBlock();
navManager.navStructure();