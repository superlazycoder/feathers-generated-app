module.exports = function (app) {

  function init(app) {
    let messageService = app.service('messages');

    if (!messageService) {
      setTimeout(() => {
        init(app);
      }, 10);
    }
    else {
      // have access to message Service
      messageService.on('created', (message) => {
        console.log('Message was Created:', message); 
      });
      
    }
  }

  setTimeout(() => (
    init(app)
  ), 10);

};
