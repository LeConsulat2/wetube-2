import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String, 
    fileUrl: {type: String, required: true},
    views: {type: Number, default: 0},
    createdAt: {type: Date, defaut: Date.now},
    creater: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
});

const model = mongoose.model("Video", videoSchema);
export default model;