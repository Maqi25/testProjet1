import mongoose from 'mongoose'

const exampleSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    id :{
        type: Number,
        required: true,
    },
    title : {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true
    }
})

export default mongoose.model('Example', exampleSchema )
