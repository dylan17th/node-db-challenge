exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, description: 'set up messages', notes: 'these are optional', complete: false, project_id: 1},
        {id: 2, description: 'set up geolocation', notes: 'these are optional', complete: false, project_id: 1},
        {id: 3, description: 'set up map', notes: 'these are optional', complete: false, project_id: 1},
        {id: 4, description: 'set up user login with google', notes: 'these are optional', complete: false, project_id: 1},
        {id: 5, description: 'set up axios calls', notes: 'these are optional', complete: false, project_id: 1},
        {id: 6, description: 'set up redux', notes: 'these are optional', complete: false, project_id: 1},
        {id: 7, description: 'set up 3 different logins', notes: 'these are optional', complete: false, project_id: 2},
        {id: 8, description: 'set up task for the employees', notes: 'these are optional', complete: false, project_id: 2},
        {id: 9, description: 'set up set up search bar for the students', notes: 'these are optional', complete: false, project_id: 2},
        {id: 10, description: 'set up sign up page for new users', notes: 'these are optional', complete: false, project_id: 2},
        {id: 11, description: 'set up edit/delete functionality for admin users', notes: 'these are optional', complete: false, project_id: 2}
      ]);
    });
};