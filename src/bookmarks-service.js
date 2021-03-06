const BookmarksService = {
  getAllBookmarks(knex) {
    return knex('*').from('bookmarks');
  },
  insertBookmark(knex, newBookmark) {
    return knex
      .insert(newBookmark)
      .into('bookmarks')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from('bookmarks').select('*').where('id', id).first();
  },
  deleteBookmark(knex, id) {
    return knex('bookmarks').where({ id }).delete();
  },
};

module.exports = BookmarksService;
