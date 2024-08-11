import Video from "../models.Video";

export const home = async (req,res) => {
    try {
        const videos = await Video.find({}).sort({ createdAt: "desc"});
        return res.render("home", {videos});
    }   catch (error) {
        return res.status(400).render("home", {errorMessage: "Cannot load the videos"});
    }
};