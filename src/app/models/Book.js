import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        synopsis: Sequelize.STRING,
        price: Sequelize.INTEGER,
        cover_image: Sequelize.STRING,
        evaluation: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    
    return this;
  }
}

export default Book;