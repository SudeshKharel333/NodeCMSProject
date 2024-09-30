const express = require('express'); // express package
const { blogs } = require('./model/index');
const app = express();

// telling Node.js to set view engine to ejs
app.set('view engine', 'ejs');

// database connection
require('./model/index');

// parse data from form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.send('hello world');
});

// All blogs route
app.get('/blog', async (req, res) => {
    try {
        // Fetch all blogs from the database
        const allBlogs = await blogs.findAll();
        console.log(allBlogs);

        // Render the 'blog.ejs' page and pass the blogs data
        res.render('blog', { blogs: allBlogs });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('An error occurred while fetching the blogs.');
    }
});

// Create blog page route
app.get('/createBlog', (req, res) => {
    res.render('createBlog.ejs');
});

// Create blog POST route
app.post('/createBlog', async (req, res) => {
    try {
        // Extract data from the form
        const { title, subtitle, description } = req.body;

        // Insert the data into the 'blogs' table
        await blogs.create({
            title: title,
            subtitle: subtitle,
            description: description,
        });

        // Redirect to the blog listing page after successful submission
        res.redirect('/blog');
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('An error occurred while creating the blog.');
    }
});

// Delete blog route
app.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Delete the blog with the specified ID
        await blogs.destroy({
            where: {
                id: id,
            },
        });

        // After deletion, redirect to the blog list
        res.redirect('/blog');
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send('An error occurred while deleting the blog.');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Node.js project has started at port 3000');
});
