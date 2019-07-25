const db = require('../database/dbConfig');

async function addUser(userData) {
  return db('users')
    .insert(userData);
}

function remove(id) {
  return db('users')
    .where('id', Number(id))
    .del();
}

async function find() {
  return db('users').select();
}


module.exports = {
  addUser,
  findByDept,
  findById,
  find,
  remove,
};
