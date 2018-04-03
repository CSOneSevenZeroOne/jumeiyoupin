const express=require("express");
const router = express.Router();
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/files'));
app.use(express.static('uploads'));

app.use("/home",require("./router/home"));
app.use("/group",require("./router/group"));
app.use("/register",require("./router/register"));

app.listen(55556);
console.log("开启服务器");