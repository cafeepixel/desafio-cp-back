import Sequelize from 'sequelize';

import dabaseConfig from '../config/database';

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dabaseConfig);
    }
}