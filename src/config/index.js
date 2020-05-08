module.exports = {
  mongodb: {
    name: 'database_test',
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/database_test',
    options: {
      useNewUrlParser: true,
    },
  },
  web: {
    showError: process.env.WEB_PROCESS_SHOW_ERROR === 'true' || true,
    port: process.env.WEB_PROCESS_PORT || 3001,
    processExitTimeout:
      parseInt(process.env.WEB_PROCESS_EXIT_TIMEOUT, 10) || 1000,
  },
};
