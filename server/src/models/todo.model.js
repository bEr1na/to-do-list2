import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({

    _id:{
        type: String
    }, 

    text:{
        type: String,
        required: [true, 'The todo text field is required']
    },

    isCompleted: {
        type: Boolean,
        default: false
    }

})

export default mongoose.model('Todo', TodoSchema);