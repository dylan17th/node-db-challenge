
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id')
        tbl.string('name',128).notNullable().unique()
        tbl.string('description', 250)
        tbl.boolean('complete').defaultTo(false).notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.string('name',128).notNullable().unique()
        tbl.string('description', 250);
    })
    .createTable('projects_resources', tbl => {
        tbl.increments('id')
        tbl.integer('project_id').notNullable().references('id').inTable('projects')
        tbl.integer('resources_id').notNullable().references('id').inTable('resources');
    })
    .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('description', 250).notNullable();
        tbl.string('notes',250)
        tbl.boolean('complete').defaultTo(false).notNullable()
        tbl.integer('project_id').notNullable().references('id').inTable('projects');
    })
};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
