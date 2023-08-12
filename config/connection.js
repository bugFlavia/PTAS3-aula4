const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://nwptjpqj:lr5Q-WWWrdOyA9l4Mq4NLoVpWh5e6pmv@motty.db.elephantsql.com/nwptjpqj", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };