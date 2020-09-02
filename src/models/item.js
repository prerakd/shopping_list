import mongoose, { Schema } from 'mongoose';


const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('item', ItemSchema);