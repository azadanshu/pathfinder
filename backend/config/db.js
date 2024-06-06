const { mongoose } = require("mongoose")

PORT = 5000;
MONGODB_URI=mongoose.connect(`mongodb://127.0.0.1:27017/pathfinder`)