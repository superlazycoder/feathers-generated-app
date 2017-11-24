const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser } = require('feathers-authentication-hooks');
const errors = require('@feathersjs/errors');


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      associateCurrentUser({
        idField:'_id',
        as:'owner'
      })
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
