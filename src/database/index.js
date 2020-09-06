import Sequelize from 'sequelize';

import dabaseConfig from '../config/database';
import Book from '../app/models/Book';

const models = [Book];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dabaseConfig);

        models.map(model => {     
            model.init(this.connection);
          });
    }
}

export default new Database;