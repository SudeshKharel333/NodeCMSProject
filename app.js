const express = require('express')// express package express vnni variable ma rakhya
const { blogs } = require('./model/index')
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
app.get("/blog", async (req, res) => {


    //table bata data nikalnu paryo
    //blogs vanni table bata sabai data dey vaneko
    const allBlogs = await blogs.findAll()
    console.log(allBlogs)

    res.render('blog', { blogs: allBlogs })
})


//createblog
app.get("/createBlog", (req, res) => {
    res.render("createBlog.ejs")
})



//createBlog Post
app.post("/createBlog", async (req, res) => {
    try {
        // Extract data from the form
        const { title, subtitle, description } = req.body;

        // Insert the data into the "blogs" table
        await blogs.create({
            title: title,
            subtitle: subtitle,
            description: description
        });

        // Redirect to the blog listing page after successful submission
        res.redirect("/blog");
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).send("An error occurred while creating the blog.");
    }
});



app.listen(3000, () => {
    console.log("nodejs project has started at port 3000")

})