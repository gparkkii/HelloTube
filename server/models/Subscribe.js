const mongoose = require('mongoose');
const Schema = mongoose.Schema

const subscribeSchema = mongoose.Schema({
    subscribeTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    subscribeFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},{timestamps: true})

const Subscribe = mongoose.model('Subscribe', subscribeSchema);
module.exports = {
    Subscribe
};