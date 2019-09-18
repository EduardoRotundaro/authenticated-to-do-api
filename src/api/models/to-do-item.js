const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const ToDoItemSchema = new Schema(
    {
        createdAt: { type: Date, default: Date.now },
        date: { type: Date, default: null },
        description: { type: String, default: null },
        done: { type: Boolean, default: false },
        completedAt: { type: Date, default: null },
        owner: { type: Schema.Types.ObjectId, ref:'User' }
    }
);

module.exports = mongoose.model('ToDoItem', ToDoItemSchema);