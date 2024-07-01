var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Admin:admin@cluster0.o6auc1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
,
    development: 'mongodb+srv://Admin:admin@cluster0.o6auc1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

,
    test: 'mongodb+srv://Admin:admin@cluster0.o6auc1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
,
};
module.exports = config;