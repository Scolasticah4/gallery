var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Scola:<password>@devops.ouaw0jj.mongodb.net/?retryWrites=true&w=majority&appName=DevOps',
    development: 'mongodb+srv://Scola:<password>@devops.ouaw0jj.mongodb.net/?retryWrites=true&w=majority&appName=DevOps',
    test: 'mongodb+srv://Scola:<password>@devops.ouaw0jj.mongodb.net/?retryWrites=true&w=majority&appName=DevOps',
}
module.exports = config;
