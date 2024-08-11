import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    video: {type: mongoose.Schema.Types.ObjectId, ref: "Video"},
});

const model = mongoose.model("Comment", commentSchema);
export default model;