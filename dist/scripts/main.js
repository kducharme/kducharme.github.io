const headerManager = require('./interface/headerManager');
const experienceManager = require('./interface/experienceManager');
const navManager = require('./interface/navManager');
const modalManager = require('./modal/modalManager');
const resumeManager = require('./interface/resumeManager');

modalManager.mWarning();

headerManager.createStructure();
headerManager.headerTitle();
navManager.navStructure();
navManager.navActive();
navManager.navShowContent();
navManager.openMobileNav();

experienceManager.experienceBlock();
