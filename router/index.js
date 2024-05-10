const express = require('express');
const router = express.Router();
const { getDashboardProjects, searchDashboardProjects } = require('../controller/dashboardControllers');


// Dashboard
router.get('/api/dashboard/getProjects', getDashboardProjects);
router.get('/api/dashboard/getProjects/:search', searchDashboardProjects);

// Marketplace

// Blockbuster

module.exports = router;