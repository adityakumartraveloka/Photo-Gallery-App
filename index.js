const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors")
const cookieParser = require("cookie-parser");


mongoose.connect("mongodb://localhost/codechef",
                {  
                    useNewUrlParser: true, 
                    useFindAndModify: false, 
                    useCreateIndex: true, 
                    useUnifiedTopology: true 
                }
            );

const UserController = require("./api/routes/User");
const AlbumController = require("./api/routes/Album");
const ShareController = require("./api/routes/Share");


const app = express();

app.use(morgan("dev"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'A succesfull hit'
    });
});

app.use("/user", UserController);
app.use("/album", AlbumController);
app.use("/share", ShareController);

app.listen(5000, () => {
    console.log(`Server is listening on http://localhost:${5000}`);
});