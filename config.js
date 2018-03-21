exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = 'sandbox';
exports.CALLBACK_URL = process.env.CALLBACK_URL || 'http://localhost:3001';
exports.PUSH_TOPIC = 'ElectronPartOrderRequest__e';
exports.IS_EVENT = true;

exports.CLIENT_ID = process.env.CLIENT_ID || "3MVG967gVD5fuTmKUfv7Xi_bBeoGa2DzFaywm4DIzt91E7ih.IYjxT2thCWBKmG5Qj7zAAgQck1BhRXvQmhID";
exports.CLIENT_SECRET = process.env.CLIENT_SECRET || "705331223338816999";
exports.USERNAME = process.env.USERNAME || "test-bnf8vxfmufxr@example.com";
exports.PASSWORD = process.env.PASSWORD || "B_^15H0LKv";
