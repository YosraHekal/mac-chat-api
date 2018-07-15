import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://yulia:a12345@ds239071.mlab.com:39071/chachatchat",
  "bodyLimit": "100kb"
}
