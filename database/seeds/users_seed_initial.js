/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    { email: 'max@example.com', password: 'infiltrate', department: 'Finance' },
    { email: 'stevie_g@example.com', password: 'infiltrate', department: 'Finance' },
    { email: 'arne_riise@example.com', password: 'infiltrate', department: 'Finance' },
    { email: 'yemi@example.com', password: 'infiltrate', department: 'Finance' },
    { email: 'martha@example.com', password: 'infiltrate', department: 'Finance' },
    { email: 'francis@example.com', password: 'infiltrate', department: 'Finance' },
  ]);
};
