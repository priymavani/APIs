const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
const app = express();
const port = 4030;

// MongoDB connection details
const uri = "mongodb+srv://priymavanicg:youtube--02@youtube-inspired-api.u0jxa.mongodb.net/";
const dbName ="youtube_api";

// Middleware
app.use(express.json());
app.use(cors());

let db,users, videos,playlists ,comments , subscriptions;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        users = db.collection("users");
        videos = db.collection("videos");
        playlists = db.collection("playlists");
        comments = db.collection("comments");
        subscriptions = db.collection("subscriptions");

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// GET /users: Fetch all users.
app.get('/users', async (req, res) => {
    try {
        const usersData = await users.find({}).toArray();
        res.json(usersData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching users" });
    }
});


// 2. GET /users/:userId: Fetch user details by ID
app.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await users.findOne({ userId }); // Assuming `userId` is a field in the document
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
    }
});


// 3. POST /users: Create a new user
app.post('/users', async (req, res) => {
    try {
        // Extract user data from the request body
        const { userId, name, email, channelName, subscribers } = req.body;

        // Create the new user object with the required fields
        const newUser  = {
            userId,          
            name,          
            email,           
            channelName,     
            subscribers,     
            joinedDate: new Date() // Current timestamp
        };

        // Insert the new user into the database
        const result = await users.insertOne(newUser );
        res.status(201).send(`User  added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding user: " + err.message);
    }
});


// 4. PATCH /users/:userId: Update user profile picture
app.patch('/users/:userId', async (req, res) => {
    try {
        const userId = (req.params);
        const updates = req.body;
        const result = await users.updateOne( userId , { $set: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating student: " + err.message);
    }
});


// 5. DELETE /users/:userId: Delete a user
app.delete('/users/:userId', async (req, res) => {
    try {
        const userId = (req.params.userId);
        const result = await users.deleteOne({userId});
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});


// Videos

// 6. GET /videos: Fetch all videos
app.get('/videos', async (req, res) => {
    try {
        const videos_ = await videos.find({}).toArray();
        res.json(videos_);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching users" });
    }
});


// 7. GET /videos/:videoId: Fetch a specific video by ID
app.get('/videos/:videoId', async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const result = await videos.findOne({ videoId }); // Assuming `videoId` is a field in the document
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
    }
});


// 8. POST /videos: Upload a new video
app.post('/videos', async (req, res) => {
    try {
        const {videoId, title,description,uploader, views,likes,dislikes,tags,videoUrl} = req.body;

        const newVideo = {
            videoId, 
            title,
            description,
            uploader, 
            views,
            likes,
            dislikes,
            tags,
            uploadDate: new Date(),
            videoUrl
        }
        const result = await videos.insertOne(newVideo);
        res.status(201).send(`video added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});

// 9. PATCH /videos/:videoId/likes: Increment likes for a video
app.patch('/videos/:videoId', async (req, res) => {
    try {
        const videoId = (req.params);
        const updates = req.body;
        const result = await videos.updateOne( videoId , { $inc: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating student: " + err.message);
    }
});

//10. DELETE /videos/:videoId: Delete a video
app.delete('/videos/:videoId', async (req, res) => {
    try {
        const videoId = (req.params.videoId);
        const result = await videos.deleteOne({videoId});
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});


// Comments

// 11. GET /videos/:videoId/comments: Fetch comments for a video
app.get('/videos/:videoId/comments', async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const result = await comments.findOne({ videoId }); // Assuming `userId` is a field in the document
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
    }
});

// 12. POST /comments: Add a comment to a video
app.post('/comments', async (req, res) => {
    try {
        const { commentId, videoId, userId, text, likes }= req.body;

        const comment = { commentId,
            videoId,
            userId,
            text,
            likes,
            postedAt: new Date()
        }
        const result = await comments.insertOne(comment);
        res.status(201).send(`comment added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});

// 13. PATCH /comments/:commentId/likes: Increment likes for a comment
app.patch('/comments/:commentId/likes', async (req, res) => {
    try {
        const commentId = (req.params);
        const updates = req.body;
        const result = await comments.updateOne( commentId , { $inc: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating student: " + err.message);
    }
});

// 14. DELETE /comments/:commentId: Delete a comment.
app.delete('/comments/:commentId', async (req, res) => {
    try {
        const commentId = (req.params.commentId);
        const result = await comments.deleteOne({commentId});
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});


// playlists

// 15. GET /playlists/:userId: Fetch all playlists for a user
app.get('/playlists/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await playlists.findOne({ userId }); // Assuming `userId` is a field in the document
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
    }
});

// 16. POST /playlists: Create a new playlist
app.post('/playlists', async (req, res) => {
    try {
        const {playlistId,
            userId,
            name,
            videos,
            isPublic} = req.body;

            const playlist =  {playlistId,
                userId,
                name,
                videos,
                createdDate: new Date(),
                isPublic}


        const result = await playlists.insertOne(playlist);
        res.status(201).send(`playlist added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});


// 17. PUT /playlists/:playlistId/videos: Add a video to a playlist
app.put('/playlists/:playlistId/videos', async (req, res) => {
    const playlistId = req.params.playlistId;
    const videoId = req.body.videos;
  
    if (!videoId) {
      return res.status(400).json({ error: 'videoId is required in the request body' });
    }
  
    try {
      const result = await db.collection('playlists').updateOne(
        { playlistId: playlistId },
        { $push: { videos: videoId } }
      );
  
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
  
      res.status(200).json({ message: 'Video added to playlist successfully' });
    } catch (error) {
      console.error('Error updating playlist:', error);
      res.status(500).json({ error: 'An error occurred while adding the video to the playlist' });
    }
  });
  

// 18. DELETE /playlists/:playlistId: Delete a playlist
  app.delete('/playlists/:playlistId', async (req, res) => {
    try {
        const playlistId = (req.params.playlistId);
        const result = await playlists.deleteOne({playlistId});
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});


// Subscriptions

// 19. GET /subscriptions/:userId: Fetch subscriptions for a user
app.get('/subscriptions/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await subscriptions.findOne({ subscriber:userId }); // Assuming `userId` is a field in the document
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching user" });
    }
});


// 20. POST /subscriptions: Subscribe to a channel
app.post('/subscriptions', async (req, res) => {
    const { subscriptionId, subscriber, channel } = req.body;
  
    if (!subscriptionId || !subscriber || !channel) {
      return res.status(400).json({ error: 'subscriptionId, subscriber, and channel are required in the request body' });
    }
  
    try {
      const result = await db.collection('subscriptions').insertOne({
        subscriptionId: subscriptionId,
        subscriber: subscriber,
        channel: channel,
        subscribedAt: new Date(),
      });
  
      res.status(201).json({ message: 'Subscribed to channel successfully', subscriptionId: result.insertedId });
    } catch (error) {
      console.error('Error subscribing to channel:', error);
      res.status(500).json({ error: 'An error occurred while subscribing to the channel' });
    }
  });
  

