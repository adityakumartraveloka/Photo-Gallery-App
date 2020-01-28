const mongoose = require("mongoose");

const PhotoSchema = mongoose.Schema({
    album_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    image_name: {
        type: String,
        required: true
    },
    image_link: {
        type: String,
    },
    destination: {
        type: String,
    },
    likes: {
        type: Array
    },
    time: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Photo", PhotoSchema);