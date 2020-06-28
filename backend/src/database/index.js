import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Repository from '../models/Repository';
import Contributor from '../models/Contributor';
import PullRequest from '../models/PullRequest';

const models = [
    Repository,
    Contributor,
    PullRequest
];

const connection = new Sequelize(dbConfig);

models.map(model => model.init(connection));
models.map(model => model.associate(connection.models));

export default connection;