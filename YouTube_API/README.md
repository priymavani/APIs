# YouTube API Project

Welcome to the YouTube API project. Built with Node.js and MongoDB, offering comprehensive functionality for managing videos, users, comments, playlists, and subscriptions within a YouTube-like platform. This API enables CRUD operations on various resources.

## 🌟 Features

### User Management
- Create, fetch, update, and delete user profiles
- Manage channel details and subscriber counts
- Track user join dates and channel metrics

### Video Management
- Upload, update, and delete videos
- Track views, likes, and dislikes
- Manage video metadata and tags

### Comment System
- Add, update, and delete comments on videos
- Like comments
- Track comment timestamps

### Playlist Management
- Create and manage playlists
- Add/remove videos from playlists
- Public/private playlist options

### Subscription System
- Subscribe/unsubscribe to channels
- Track subscription dates
- Fetch user subscriptions

## 🛠 Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- API Documentation: Postman

## 🚀 API Routes Overview

### 👤 User Routes
- GET `/users` - Fetch all users
- GET `/users/:userId` - Fetch specific user
- POST `/users` - Create new user
- PATCH `/users/:userId` - Update user
- DELETE `/users/:userId` - Delete user

### 🎥 Video Routes
- GET `/videos` - Fetch all videos
- GET `/videos/:videoId` - Fetch specific video
- POST `/videos` - Upload new video
- PATCH `/videos/:videoId` - Update video
- DELETE `/videos/:videoId` - Delete video

### 💬 Comment Routes
- GET `/videos/:videoId/comments` - Fetch video comments
- POST `/comments` - Add comment
- PATCH `/comments/:commentId/likes` - Update comment likes
- DELETE `/comments/:commentId` - Delete comment

### 📋 Playlist Routes
- GET `/playlists/:userId` - Fetch user playlists
- POST `/playlists` - Create playlist
- PUT `/playlists/:playlistId/videos` - Add video to playlist
- DELETE `/playlists/:playlistId` - Delete playlist

### ✅ Subscription Routes
- GET `/subscriptions/:userId` - Fetch user subscriptions
- POST `/subscriptions` - Subscribe to channel

## 📝 Example User Creation

```
{
  "_id": {
    "$oid": "67879b400601b8bd02396"
  },
  "userId": "u003",
  "name": "priy mavani",
  "email": "priy@codinggita.com",
  "channelName": "tech",
  "subscribers": 15000,
  "joinedDate": {
    "$date": "2020-01-15T00:00:00.000Z"
  },
  "uploadedVideos": [
    "v004",
    "v005"
  ],
  "profilePicture": "http://codinggita.com/media/priy.jpg",
  "isVerified": true
}
```

## 👨‍💻 Code Structure
- `youtube_api.js`: Main application file containing server setup and API routes
- Collections:
  - users: User profiles and channel information
  - videos: Video metadata and statistics
  - comments: Video comments and interactions
  - playlists: User playlist management
  - subscriptions: Channel subscriptions

## 🔍 Key Features
- RESTful API design principles
- Comprehensive error handling
- MongoDB integration
- CORS enabled
- Proper request/response formatting

## 🚀 Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure MongoDB connection
4. Start the server: `node youtube_api.js`
5. API will be available at `http://localhost:4030`

Feel free to contribute or reach out for collaboration! 🎥
