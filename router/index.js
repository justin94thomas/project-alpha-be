const express = require('express');
const router = express.Router();
const { getDashboardProjects, searchDashboardProjects } = require('../controller/dashboardControllers');
const { } = require('../controller/marketplaceControllers');
const { getBlockbusterMovies, getBlockbusterSeats } = require('../controller/blockbusterControllers');

// Dashboard
router.get('/api/dashboard/getProjects', getDashboardProjects);
router.get('/api/dashboard/getProjects/:search', searchDashboardProjects);

// Marketplace

// Blockbuster
router.get('/api/blockbuster/getMovies', getBlockbusterMovies)
router.get('/api/blockbuster/getSeats', getBlockbusterSeats)
module.exports = router;