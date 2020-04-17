
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'flattening the curve', description: 'this is a description of the flatten the curve project', complete: false},
        {id: 2, name: 'school in the cloud', description:'this is a descfiption of thd school in the cloud project', complete: false}
      ]);
    });
};
