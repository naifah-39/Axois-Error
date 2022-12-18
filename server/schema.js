


const {Schema, model} = require("mongoose");
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Start defining your user schema
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const dataSchema = new Schema({
    foodName: String,
    description: String,
});

const Data = model("data", dataSchema);
module.exports = Data;