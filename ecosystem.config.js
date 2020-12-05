module.exports = {
    apps : [{
      name: 'api',
      exp_backoff_restart_delay: 10,
      script: './server.js',
      error_file: 'err.log',
      out_file: 'out.log',
      log_file: 'combined.log',
      env_production: {
        PORT: 3000
      }
    }]
  };