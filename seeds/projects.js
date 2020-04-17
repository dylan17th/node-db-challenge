
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'flattening the curve', descriptions: 'this is a description of the flatten the curve project', complete: false},
        {id: 2, name: 'school in the cloud', descriptions:'this is a descfiption of thd school in the cloud project', complete: false}
      ]);
    });
};
