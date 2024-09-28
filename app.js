const express = require('express')// express package express vnni variable ma rakhya
const app = express()//storing it in variable app '"yo 2 ta line jun program ma pani hunxa"

//telling the nodejs to set viewengine to ejs
app.set('view engine', 'ejs')

//database connection
require("./model/index")

//form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get("/", (req, res) => {
    res.send("hello world")
})
//allblogs
app.get("/blog", (req, res) => {
    res.render("blog.ejs")
})


//createblog
app.get("/createBlog", (req, res) => {
    res.render("createBlog.ejs")
})



//createBlog Post
app.post("/createBlog", (req, res) => {
    console.log(req.body)
    res.send("form submitted successfully")
})


app.listen(3000, () => {
    console.log("nodejs project has started at port 3000")

})