var config = (process.env.HEROKU)? // Heroku method
  {
    dbKey: process.env.DBKEY 
  } :
  require('./config.js');