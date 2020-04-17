exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {id: 1, name: '5 computers', description: '5 computers to have enough to work on through the project in a timely manner'},
        {id: 2, name: '5 front-end engineers', description: '5 front-end engineers to have enough to work on through the project in a timely manner'},
        {id: 3, name: '5 offices', description: '5 offices to have enough to work on through the project in a timely manner'},
        {id: 4, name: '5 desks', description: '5 desk to have enough to work on through the project in a timely manner'},
        {id: 5, name: '1 routers for wifi', description: '1 router wifi so we can work on through the project in a timely manner'},
        {id: 6, name: 'a software license', description: 'a software license because it is required'},
        {id: 7, name: '5 wireless mouses', description: '5 mouses to have enough to work on through the project in a timely manner'},
        {id: 8, name: '5 extra moniters', description: '5 extra moniters to have enough to work on through the project in a timely manner'}
      ]);
    });
};
