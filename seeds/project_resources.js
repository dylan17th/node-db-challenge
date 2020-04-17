
exports.seed = function(knex) {
  return knex('projects_resources').del()
    .then(function () {
      return knex('projects_resources').insert([
        {id: 1, project_id: 1 , resources_id: 1},
        {id: 2, project_id: 1 , resources_id: 2},
        {id: 3, project_id: 1 , resources_id: 3},
        {id: 4, project_id: 1 , resources_id: 4},
        {id: 5, project_id: 1 , resources_id: 5},
        {id: 6, project_id: 1 , resources_id: 6},
        {id: 7, project_id: 1  , resources_id: 7},
        {id: 8, project_id: 1 , resources_id: 8},
        {id: 9, project_id: 2 , resources_id: 1},
        {id: 10, project_id: 2 , resources_id: 2},
        {id: 11, project_id: 2 , resources_id: 3},
        {id: 12, project_id: 2 , resources_id: 4},
        {id: 13, project_id: 2 , resources_id: 5},
        {id: 14, project_id: 2 , resources_id: 6}
      ]);
    });
};
