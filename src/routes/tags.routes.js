const { Router } = require('express');

const TagsController = require('../controllers/TagsController');
const tagsController = new TagsController();

const tagsRoutes = Router();
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

tagsRoutes.use(ensureAuthenticated);

tagsRoutes.get('/', tagsController.index);

module.exports = tagsRoutes;