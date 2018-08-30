'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let promises = [];

    promises.push(queryInterface.addConstraint('Todos', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'fk_Todos_Users',
      references: {
        table: 'Users',
        field: 'id'
      }
    }));
    return Promise.all(promises);
  },

  down: (queryInterface, Sequelize) => {
    let promises = [];

    promises.push(queryInterface.removeConstraint('Todos', 'fk_Todos_Users'));
    return Promise.all(promises);
  }
};
