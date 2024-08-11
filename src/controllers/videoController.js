import Video from "../models.Video";

export const home = async (req,res) => {
    try {
        const videos = await Video.find({}).sort({ createdAt: "desc"});
        return res.render("home", {videos});
    }   catch (error) {
        return res.status(400).render("home", {errorMessage: "Cannot load the videos"});
    }
};

export const search = async (req, res) => {
    const {keyword} = req.query;
    let videos = [];
    if (keyword) {
        videos = await Video.find({
            title: {
                $regex:new RegExp(keyword, "i"),
            },
        });
    }
    return res.render("search", {videos});
};

export const getUpload = (req, res) => res.render("upload");
export const postUpload = async (req, res) => {
    const {title, description, fileUrl} = req.body;
    try {
        const newVideo = await Video.create({
            title, description, fileUrl,
            creater: req.session.user._id,
        });
        return res.redirect(`/videos/${newVideo.id}`);
    }   catch (error) {
        return res.status(400).render("upload", {errorMessage: "Failed to upload video"});
    }
};

export const videoDetail = async(req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id).populate("creator");
    if (!video) {
        return res.status(404).render("404", {errorMessage: "Video not found."});
    }
    return res.render("videoDetail", {video});
}

export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");