/* eslint no-console: 1 */
console.warn('You are using the default filter for the messages service. For more information about event filters see https://docs.feathersjs.com/api/events.html#event-filtering'); // eslint-disable-line no-console

module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  
  if (connection.user.email === hook.params.user.email) {
    return data;
  }
  else if (connection.user.email === data.to) {
    return data;
  }
  return null;
};
